const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah'}, 
        { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
        default: 
            return state;
    }
}

export default projectReducer;

// TODO: verify video 18 which implements code to add projects into firebase 7:50 minutes
//Unable to verify data added to firebase from site. Troubleshoot