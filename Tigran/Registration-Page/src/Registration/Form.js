import React, { Component } from 'react';
import axios from 'axios';

import FormHeader from './FormHeader.js';
import GeneralInfo from './steps/GeneralInfo.js';
import PackageInfo from './steps/PackageInfo.js';
import CardInfo from './steps/CardInfo.js';
import Success from './steps/Success.js';
import FormFooter from './FormFooter.js';

class Form extends Component {
    state = {
        step : 1,
        next : false,
        isValidCountStepOne : 0,
        isValidCountStepThree : 0,
        generalInfo : {
            firstName : '',
            lastName : '',
            country : '',
            city : '',
            address : '',
            email : '',
            password : ''
        },
        packageInfo : '',
        cardInfo : {
            creditCardNumber : '',
            creditCardName : '',
            creditCardCvc : '',
            creditCardExpirationDate : ''
        },
        success : ''
    }
    get isNextFunStepThree () { 
        return this.state.isValidCountStepOne === 7
    }
    get isNextFunStepThree2 () {
        return this.state.isValidCountStepThree === 4
    }
    packageInfoSave = (event) => {
        this.setState({
            packageInfo : event.target.value
        })
    }
    setInfo = (inputName,inputValue,isValid,infoType,countType) => {
        let info = this.state[infoType]
        info[inputName] = inputValue;
        if(isValid === "is-valid"){
            this.setState({
                [infoType] : info,
                [countType] : this.state[countType] + 1
                    
            })
        }else if(isValid === "is-invalid"){
            this.setState({
                [infoType] : info,
                [countType] : this.state[countType] - 1
            })
        }else{
            this.setState({
                [infoType] : info
            })
        }
    }
    nextFun = () => {
        if(this.state.step < 3){
            this.setState({
                step : this.state.step + 1
            }) 
        }
    }
    previousFun = () => {
        if(this.state.step > 1){
           this.setState({
                step : this.state.step - 1
            })
        } 
    }
    onSubmit = () => {
        const cardInfo = this.state.cardInfo;
        const generalInfo = this.state.generalInfo;
        const packageInfo = this.state.packageInfo;
        const userInfo = Object.assign({},{generalInfo : generalInfo}, {cardInfo : cardInfo}, {packageInfo : packageInfo});
        console.log(userInfo)
        axios.post('http://localhost:4000/serverport/add', userInfo)
            .then(res => {this.responseMessage = res.data})
            .then(this.setState({
                step : 4                
            }))
            .catch(reject => {this.responseMessage = reject.message})
        
    }
    render() {
        let component;
        switch(this.state.step){
            case 1:
                component = <GeneralInfo
                                generalInfo = {this.state.generalInfo}
                                isValidAll={this.state.isValidCountStepOne}
                                setInfo={this.setInfo}
                                />;
                break;
            case 2:  
                component = <PackageInfo
                                packageInfo={this.state.packageInfo}
                                packageInfoSave={this.packageInfoSave}
                                isNextFunStepTwo={this.isNextFunStepTwo}
                            />;
                break;
            case 3:  
                component = <CardInfo
                                setInfo={this.setInfo}
                                cardInfo = {this.state.cardInfo}
                                isValidAll={this.state.isValidCountStepThree}
                                setStepThreeInfo={this.setStepThreeInfo}
                            />;
                break;
            case 4:  
                component = <Success success={this.state.success}/>;
                break;
            default:
                break;
        }
        return (
            <div className="Form text-center p-5">
                <FormHeader step={this.state.step}/>
                {component}
                <FormFooter 
                    isNextFunStepThree={this.isNextFunStepThree}
                    isNextFunStepThree2={this.isNextFunStepThree2}
                    next={this.state.next}
                    step={this.state.step}
                    nextFun={this.nextFun}
                    previousFun={this.previousFun}
                    onSubmit={this.onSubmit}
                    packageInfo={this.state.packageInfo}
                    />
            </div>
        );
    }
}

export default Form;


