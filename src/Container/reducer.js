import {
    LOAD,
} from './constants';

const initialState = {
    isLoading: false,
    loadData: '',
    loadError: '',
};

export default function exampleFormReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return {
                loadData: action.data,
                isUpdateMode: false
            };
        default:
            return state;
    }
}
