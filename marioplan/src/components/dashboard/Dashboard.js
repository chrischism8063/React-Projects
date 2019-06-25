import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                <Notifications />
                    {/* Project List */}
                    <div className="col s12 m6"></div>
                    <ProjectList />
                    {/* Notifications at right */}
                    <div className="col s12 m5 offset-m1"></div>
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;