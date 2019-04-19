import React, { Component } from 'react';

import Messages from './../Messages.js';

class FormHeader extends Component {
    
  render() {
    const {step} = this.props;
    let title;
    switch(step){
            case 1:
                title = Messages.headInfo.title1;
                break;
            case 2:  
                title = Messages.headInfo.title2;
                break;
            case 3:  
                title = Messages.headInfo.title3;
                break;
            default:
                break;
        }
    return (
      	<div className="FormHeader">
            <p className="h4 mb-4">{title}</p>
    		<p className="h4 mb-4">Step {step} / {Messages.maxSteps}</p>
      	</div>
    );
  }
}

export default FormHeader;