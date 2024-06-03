import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './PendingPage.css';


function PendingPage() {
const dispatch = useDispatch();
const userQuestions = useSelector((store)=> store.questions)

useEffect(() => {
    console.log('in useEffect');
    const action = { type: 'FETCH_QUESTIONS' };
    dispatch(action);
  }, []);

  return (
    <table className='QuestionsList'>
      <thead>
        <tr>
          <th>Question</th>
          <td> Why is 9+10 = 21?  </td>

          <th>Confusion</th>
          <td> I am very confused on why people keep telling me it's 21 when clearly its 19  </td>
        <button> Edit </button> <button> Delete </button>
        </tr>
      </thead>
      <tbody>
     <tr>
    </tr>
        
      </tbody>
    </table>
  );
}


export default PendingPage;
