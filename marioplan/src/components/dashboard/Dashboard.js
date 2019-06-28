import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
// Connect redux with store
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
console.log(this.props);
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    {/* Project List */}
                    <div className="col s12 m6"></div>
                        <ProjectList projects={ projects } />
                    {/* Notifications at right */}
                    <div className="col s12 m5 offset-m1"></div>
                        <Notifications />
                </div>
            </div>
        );
    }
}

// sends project data to props
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    // syncs the data with the store
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);