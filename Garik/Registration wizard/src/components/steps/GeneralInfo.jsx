import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Button, FormFeedback} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'
import Messages from './../../Messages.js'

@observer
class GeneralInfo extends Component {
    static contextTypes = {
        RegistartionStore : PropTypes.shape({
            generalInfoChangeInput : PropTypes.func,
            stepNext : PropTypes.func,
            userInfo : PropTypes.object,
            generalInfoValid : PropTypes.bool,
            generalInfoCount : PropTypes.number,
        }).isRequired
    }
    render() {
        const {generalInfoChangeInput, stepNext, userInfo, generalInfoValid} = this.context.RegistartionStore;
        const inputNames = Constants.generalInfo.inputNames;
        const inputInfo = Messages.generalInfo.inputInfo;
    return (
        <div className = "RegistrationForm">
            <Form>
                <FormGroup>
                    <Input placeholder={inputInfo.firstName.placeholder} name = {inputNames.firstName} 
                        onChange = {generalInfoChangeInput} defaultValue = {userInfo.generalInfo.firstName}
                        />
                    <FormFeedback>{inputInfo.firstName.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder={inputInfo.lastName.placeholder} name = {inputNames.lastName} 
                        onChange = {generalInfoChangeInput} defaultValue = {userInfo.generalInfo.lastName}
                        />
                    <FormFeedback>{inputInfo.lastName.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder={inputInfo.country.placeholder} name = {inputNames.country} 
                        onChange = {generalInfoChangeInput} defaultValue = {userInfo.generalInfo.country}
                        />
                    <FormFeedback>{inputInfo.country.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder={inputInfo.city.placeholder} name = {inputNames.city} 
                        onChange = {generalInfoChangeInput} defaultValue = {userInfo.generalInfo.city}
                        />
                    <FormFeedback>{inputInfo.city.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder={inputInfo.address.placeholder} name = {inputNames.address}
                        onChange = {generalInfoChangeInput} defaultValue = {userInfo.generalInfo.address}
                        />
                    <FormFeedback>{inputInfo.address.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="email" placeholder={inputInfo.email.placeholder} 
                        name = {inputNames.email} onChange = {generalInfoChangeInput} 
                        defaultValue = {userInfo.generalInfo.email}
                        />
                    <FormFeedback>{inputInfo.email.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" placeholder={inputInfo.password.placeholder} 
                        name = {inputNames.password} onChange = {generalInfoChangeInput} 
                        defaultValue = {userInfo.generalInfo.password}
                        />
                    <FormFeedback>{inputInfo.password.validEror}</FormFeedback>
                </FormGroup>
                <Button onClick = {stepNext} disabled = {!generalInfoValid}>Next</Button>
            </Form>
        </div>
        );
    }
}

export default GeneralInfo;