const userQuestions = (state=[], action)=>{
    switch (action.type) {
        case 'SET_USER_QUESTIONS':
            return action.payload;
        default: 
            return state;
    }
}

export default userQuestions