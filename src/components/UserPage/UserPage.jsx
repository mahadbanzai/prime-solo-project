import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';

function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const subject = useSelector((store)=> store.questions)

  const [question, setQuestion] = useState('')
  const [confusion, setConfusion] = useState('')
  const addQuestion = (event) => {
    event.preventDefault()
    dispatch({
      type: 'FETCH_QUESTIONS',
      payload: {
        question: question,
        confusion: confusion
      }
    })
  }
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
        <label>Choose a subject:</label>
      <select id="subject" name="subject">
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="reading">Reading</option>
          <option value="baking">Baking</option>
      </select>
      <form onSubmit={addQuestion}>
      <label>Input Question:</label> 
      <input 
        placeholder='ACTUAL Question' 
        type="text" 
        id="question" 
        name="question" 
        value={question} 
        onChange={(event)=> setQuestion(event.target.value)}/> 


      <label>What You're ACTUALLY asking:</label> 
      <input size="50"
        placeholder='What are you confused about? Be as specific as you can' 
        type="text"
        id="confusion" 
        name="confusion" 
        value={confusion}
        onChange={(event)=> setConfusion(event.target.value)}/>
      <button 
       className="btn"> Submit! </button>
      </form>

    </div>
  );
  
}

// this allows us to use <App /> in index.js
export default UserPage;
