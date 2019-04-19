import React, { Component } from 'react';

import Messages from './../../Messages.js';
import Constants from './../../Constants.js';

class GeneralInfo extends Component {
    state = {
        isValidAll : false
    }
    componentDidMount(){
        if(this.props.isValidAll === 7){
            this.setState({
                isValidAll : true
            })
        }
    }
    isValid = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputClass = event.target.className;
        if(inputValue.match(Constants.inputRegexp[inputName])){
            if(inputClass === Constants.classes.inValidClassName || inputClass === Constants.classes.defaultClassName){
                event.target.className = Constants.classes.validClassName;
                this.props.setInfo(inputName,inputValue,"is-valid","generalInfo", "isValidCountStepOne");// set generalInfo and count++
            }else{
                this.props.setInfo(inputName,inputValue,"", "generalInfo", "isValidCountStepOne");// set generalInfo
            }
        }else{
            event.target.className = Constants.classes.inValidClassName;
            if(inputClass === Constants.classes.validClassName && inputClass !== Constants.classes.defaultClassName){
                this.props.setInfo(inputName,inputValue,"is-invalid","generalInfo", "isValidCountStepOne");// set generalInfo and count--
            }else{
                this.props.setInfo(inputName,inputValue,"", "generalInfo", "isValidCountStepOne");// set generalInfo
            }
        }        
    }
    
    render() {
        const {generalInfo} = this.props;
        const {isValidAll} = this.state;
        
        return (
            <div className="GeneralInfo">
                <div className="form mb-4">
                    
                        <input type="text" name={Messages.generalInfoInputs.firstName.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.firstName.placeholder} onChange={this.isValid} value={generalInfo.firstName}/>
                    
                   
                        <input type="text" name={Messages.generalInfoInputs.lastName.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.lastName.placeholder} onChange={this.isValid} value={generalInfo.lastName}/>
                    
                </div>
                <div className="form mb-4">
                    
                        <input type="text" name={Messages.generalInfoInputs.country.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.country.placeholder} onChange={this.isValid} value={generalInfo.country}/>
                   
                    
                        <input type="text" name={Messages.generalInfoInputs.city.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.city.placeholder} onChange={this.isValid} value={generalInfo.city}/>
                    
                </div>
                <input type="text" name={Messages.generalInfoInputs.address.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.address.placeholder} onChange={this.isValid} value={generalInfo.address}/>

                <input type="email" name={Messages.generalInfoInputs.email.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.email.placeholder} onChange={this.isValid} value={generalInfo.email}/>

                <input type="password" name={Messages.generalInfoInputs.password.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.password.placeholder} onChange={this.isValid} value={generalInfo.password}/>
                            
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    {Messages.generalInfoInputs.paswordValidationHelp}
                </small>
            </div>
        );
  }
}

export default GeneralInfo;