import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [author, setauthor] = useState("HF_Merciless");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })
            .then((res) => {
                // Check if the server responded with an error (like 404 or 500)
                if (!res.ok) {
                    throw Error('Could not post the data to the server');
                }
                return res.json();
            })
            .then(() => {
                console.log('New blog added successfully!');
                setIsPending(false);
                navigate('/'); // This should now trigger
            })
            .catch((err) => {
                setIsPending(false);
                console.error('Fetch Error:', err.message);
                alert("Database server is offline! Make sure json-server is running on port 8000.");
            });
    };

    return (
        <div className="Create">
            <h2>Create a new blog</h2>
            {/* FIX: Added onSubmit handler here */}
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />
                <label>Subject</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e) => setauthor(e.target.value)}
                >
                    <option value="HF_Merciless">HF_Merciless</option>
                    <option value="HF Merciles">HF Merciles</option>
                </select>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled>Adding Blog</button>}
            </form>
        </div>
    );
};

export default Create;