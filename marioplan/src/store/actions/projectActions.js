export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        // make async call to database

        dispatch({ type: 'CREATE_PROJECT', project: project });
    }
};

// TODO: stopped at tutorial #17 5 minutes