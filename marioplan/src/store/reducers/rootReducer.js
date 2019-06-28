import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    // syncs data with the firestore
    firestore: firestoreReducer
});

export default rootReducer;