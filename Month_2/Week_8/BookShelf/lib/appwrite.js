import { Client, Account,Avatars, ID } from 'react-native-appwrite';
import * as SecureStore from 'expo-secure-store';

const client = new Client();

client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
    .setPlatform('com.hf.merciless.bookshelf');

export const account = new Account(client);
export { ID };

account.setSessionStorage({
    async getItem(key) {
        return await SecureStore.getItemAsync(key);
    },
    async setItem(key, value) {
        await SecureStore.setItemAsync(key, value);
    },
    async removeItem(key) {
        await SecureStore.deleteItemAsync(key);
    },
});