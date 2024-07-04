import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import './prompt.css';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faArrowDownZA, faArrowUpAZ, faArrowsUpDown, faArrowDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

// const userWorkouts = [
//     { id: 1, title: 'Monday Strength', lastPerformed: '2023-07-01' },
//     { id: 2, title: 'Wednesday Cardio', lastPerformed: '2023-06-28' },
//     { id: 3, title: 'Friday Full Body', lastPerformed: '2023-06-30' },
// ];

const Prompt = () => {

    //Chat Gpt
    const [prompt, setPrompt] = useState(""); 
    const [response, setResponse] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8080/chat", {prompt})
        .then((res) =>{
        setResponse(res.data)
        })
        .catch((err)=>{
        console.log(err)
        });
    };

    return (
        <div className="prompt">
            <main className="dashboard-content">
                <h1>Welcome, User!</h1>
                <div className='prompts'>
                    <div className='log'></div>
                    <textarea 
                    class="text-area" 
                    type="text" rows="1" dir="" 
                    maxlength="4000" 
                    placeholder="Ask me anything..." 
                    autofocus=""
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}
                    ></textarea>
                    <button className='promptbtn' type='submit' onClick={handleSubmit}><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </main>
            <script src="https://kit.fontawesome.com/bc449cadad.js" crossorigin="anonymous"></script>
        </div>
    );
};

export default Prompt;