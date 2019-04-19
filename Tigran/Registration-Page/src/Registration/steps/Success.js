import React, { Component } from 'react';

import Messages from './../../Messages.js';

class Success extends Component {
    
    render() {
        return (
            <div className="Success">
                <div className="form">
                    <h1>{Messages.success}</h1>
                </div>
            </div>
        );
    }
}

export default Success;
