import axios from "axios";
import { takeLatest, put } from 'redux-saga/effects';


function* fetchQuestions() {
    try {
        const response = yield axios.get('/api/questions');
           yield put({
              type:'SET_USER_QUESTIONS',
              payload: response.data 
            });
      } catch (error) {
          console.log('error with get request', error);
      }
    
}

function* fetchQuestionsInput(action) {
    try {
        yield axios.post('/api/questions', action.payload)
        yield put ({
            type: 'QUESTIONS_INPUT',
        })
    } catch (error) {
        console.log('ERROR in fetchingQuestionsInput', error);
    }
};

function* questionsSaga() {
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
    yield takeLatest('FETCH_QUESTIONS_INPUT',fetchQuestionsInput )
} 
export default questionsSaga;
