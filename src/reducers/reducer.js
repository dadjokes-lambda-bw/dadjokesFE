import { 
    ADD_JOKE_START, 
    ADD_JOKE_SUCCESS, 
    ADD_JOKE_FAILURE
 
} from '../actions/addJokeAction';

const initialState = {

    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_JOKE_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case ADD_JOKE_SUCCESS:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            }
        case ADD_JOKE_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            }
        
        default: 
            return state;;
    }
};

export default reducer;