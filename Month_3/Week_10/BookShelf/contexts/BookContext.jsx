import {createContext, useEffect, useState} from 'react'
import { databases } from "../lib/appwrite";
import {ID, Permission, Query, Role} from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "6a11fa2d003180146514"
const COLLECTION_ID = "6a233034003a29256721"

export const BookContext = createContext()

export function BookProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBook() {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID,
                [
                    Query.equal('userId', user.$id)
                ]
            )
            setBooks(response.documents)
            return response.documents
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {
            return await databases.getDocument(DATABASE_ID, COLLECTION_ID, id)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function createBook({ title, author, description }) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                // ✅ FIXED: Pass your column fields directly at the root level of the object!
                {
                    title: title,
                    author: author,
                    description: description,
                    userId: user?.$id
                },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )

            setBooks((prev) => [newBook, ...prev])
            return newBook
        } catch (error) {
            throw Error(error.message)
        }
    }
    // 💡 4. Delete a book record from the Cloud
    async function deleteBook(id) {
        try {
            await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id)
            // Filter deleted book out of your UI list instantly
            setBooks((prev) => prev.filter((book) => book.$id !== id))
        } catch (error) {
            throw Error(error.message)
        }
    }
    useEffect(() => {
        if (user) {
            fetchBook()
        } else ([])
    })

    return (
        <BookContext.Provider value={{ books, fetchBook, fetchBookById, createBook, deleteBook }}>
            {children}
        </BookContext.Provider>
    )
}