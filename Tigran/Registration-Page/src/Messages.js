const Messages = {
	maxSteps : "4",
    headInfo : {
        title1 : "Tell us who you are: ",
        title2 : "Check your package",
        title3 : "Add card information"
    },
    success : "Successful registration",
    packageInfo : {
        headInfo : {
            step : 2,
            textHead : "Enter your package"
        },
        inputLabels : {
            standart : "Standard Package",
            premium : "Premium Package"
        }
    },
    formFooter : {
        buttonNext : "next",
        buttonPrevious : "previous",
        buttonSubmit : "submit"
    },
    generalInfoInputs : {
        firstName : {placeholder : 'First Name', name : 'firstName'},
        lastName : {placeholder : 'Last Name', name : 'lastName'},
        country : {placeholder : 'Country', name : 'country'},
        city : {placeholder : 'City', name : 'city'},
        address : {placeholder : 'Address', name : 'address'},
        email : {placeholder : 'email', name : 'email'},
        password : {placeholder : 'password', name : 'password'},

        creditCardNumber : {placeholder : 'credit card number', name : 'creditCardNumber'},
        creditCardName : {placeholder : 'credit card name', name : 'creditCardName'},
        creditCardCvc : {placeholder : 'credit card cvc', name : 'creditCardCvc'},
        creditCardExpirationDate : {placeholder : 'credit card expirationDate', name : 'creditCardExpirationDate'},

        paswordValidationHelp : "Minimum 8 characters, at least one letter and one number:"
    }
};

export default Messages;