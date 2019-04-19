import React, { Component } from 'react';

import Constants from './../../Constants.js';
import Messages from './../../Messages.js';

class CardInfo extends Component {
    state = {
        isValidAll : false
    }
    componentDidMount(){
        let cardInfoLength = Object.keys(this.props.cardInfo).length;
        if(this.props.isValidAll === cardInfoLength){
            this.setState({
                isValidAll : true
            });
        } 
    }
    isValid = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputClass = event.target.className;
        if(inputValue.match(Constants.inputRegexp[inputName])){
            event.target.className = Constants.classes.validClassName;
            if(inputClass === Constants.classes.inValidClassName || inputClass === Constants.classes.defaultClassName){
                this.props.setInfo(inputName,inputValue,"is-valid","cardInfo", "isValidCountStepThree");// set generalInfo and count++
            }else{
                this.props.setInfo(inputName,inputValue,"","cardInfo", "isValidCountStepThree");// set generalInfo
            }
        }else{
            event.target.className = Constants.classes.inValidClassName;
            if(inputClass === Constants.classes.validClassName && inputClass !== Constants.classes.defaultClassName){
                
                this.props.setInfo(inputName,inputValue,"is-invalid","cardInfo", "isValidCountStepThree");// set generalInfo and count--
            }else{
                this.props.setInfo(inputName,inputValue,"","cardInfo", "isValidCountStepThree");// set generalInfo
            }
        }        
    }
    render() {
        const {cardInfo} = this.props;
        const {isValidAll} = this.state;
        return (
            <div className="CardInfo">
                <form className="text-center ">
                    <input type="text" name={Messages.generalInfoInputs.creditCardNumber.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.creditCardNumber.placeholder} onChange={this.isValid} value={cardInfo.creditCardNumber}/>
                            
                    <input type="text" name={Messages.generalInfoInputs.creditCardName.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.creditCardName.placeholder} onChange={this.isValid} value={cardInfo.creditCardName}/>
                            
                    <input type="text" name={Messages.generalInfoInputs.creditCardCvc.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.creditCardCvc.placeholder} onChange={this.isValid} value={cardInfo.creditCardCvc}/>
                            
                    <input type="text" name={Messages.generalInfoInputs.creditCardExpirationDate.name}
                            className={(isValidAll) ? Constants.classes.validClassName : Constants.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs.creditCardExpirationDate.placeholder} onChange={this.isValid} value={cardInfo.creditCardExpirationDate}/>
                </form>
            </div>
        );
    }
}

export default CardInfo;
