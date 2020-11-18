import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    openNav(){

    }
    render() {
        return (
            <div className = "sidebar">
                <div className = "sidebar-menu" onClick = {this.openNav()}>&#9776;</div>
             <a href="Home"></a>
             <h1>Contact</h1>   
                
            </div>
        );
    }
}

export default Sidebar;