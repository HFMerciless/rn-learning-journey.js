/*
import { useState, useRef, useEffect } from 'react'
import './App.css'
import {Chatbot} from 'supersimpledev';


function ChatBotInput({setChatMessages}){
    const [inputText, setInputText]=useState("")
    function saveInputText(event){
        setInputText (event.target.value)
    }
    async function sendMessage() {
        const userMessage = {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
        }
        const loadingSpinner = {
            message: "LOADING_SPINNER_ID",
            sender: "bot",
            id: crypto.randomUUID()
        }
        setChatMessages((prevMessages) => [
            ...prevMessages,
            userMessage,
            loadingSpinner
        ])
        const currentInput = inputText;
        setInputText("")
        const response = await Chatbot.getResponse(currentInput);
        setTimeout(() => {
            setChatMessages((prevMessages) => {
                const messagesWithoutSpinner = prevMessages.slice(0, -1);
                return [
                    ...messagesWithoutSpinner,
                    {
                        message: response,
                        sender: "bot",
                        id: crypto.randomUUID()
                    }
                ];
            });
        }, 500);
    }
    return(
        <div className="chatbot_input_container">
            <input
                placeholder="Type your message"
                size="30"
                onChange={saveInputText}
                value={inputText}
                className="input_text"
            />
            <button onClick={sendMessage}
                    className="send_button"
            >Send</button>
        </div>
    )
}
function ChatMessage({message, sender}){
    //const message=props.message
    //const sender=props.sender
    //const {message, sender}=props

    /!*if (sender==="bot") {
        return (
            <div>
                <img src="../../../robot.png" width="50" alt="bot"/>
                {message}
            </div>
        )
    }*!/

    return(
        <div className={sender === "bot" ? "bot_message" : "user_message"}>
            {sender === "bot" && (
                <img src="/robot.png" alt="bot" className="message_image"/>
            )}

            <div className="message_text">
                {/!* Check if message is our spinner ID *!/}
                {message === "LOADING_SPINNER_ID" ? (
                    <img
                        src="https://supersimple.dev/images/loading-spinner.gif" alt="Loading..."
                        className="loading-spinner"
                    />
                ) : (
                    message
                )}
            </div>

            {sender === "user" && (
                <img src="/user.png" alt="user" className="message_image"/>
            )}
        </div>
    )
}
function ChatMessages({chatMessages}){
    const chatMessagesRef = useRef(null)
    useEffect(() => {
        const containerElement = chatMessagesRef.current
        if (containerElement) {
            containerElement.scrollTop = containerElement.scrollHeight
        }
    },[chatMessages])
    return(
        <div className="chatbot_messages"
             ref={chatMessagesRef}>

            {chatMessages.map((chatMessage)=> {
                    return(
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />
                    )
                }
            )
            }</div>
    )
}
function App(){
    const [chatMessages,setChatMessages]=useState(
        [{
            message:"hello",
            sender:"user",
            id: "id1"
        }, {
            message: "hi how are you",
            sender:"bot",
            id:"id2"
        }, {
            message: "I am fine",
            sender:"user",
            id: "id3"
        }, {
            message: "What is your name?",
            sender:"bot",
            id:"id4"
        }, {
            message: "My name is HF_Merciless",
            sender:"user",
            id:"id5"
        }]
    )
    //const [chatMessages,setChatMessages]=array
    //const chatMessages=array[0]
    //const setChatMessages=array[1]

    return(
        <div className="chatbot_container">
            <ChatMessages
                chatMessages={chatMessages}
            />
            <ChatBotInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    )
}

export default App
*/
