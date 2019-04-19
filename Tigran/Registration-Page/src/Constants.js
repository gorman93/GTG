const Constants = {
	inputRegexp : {
        firstName : /^([a-z]|[A-Z]){1,15}$/,
        lastName : /^([a-z]|[A-Z]){1,20}$/,
        country : /^([a-z]|[A-Z]){1,15}$/,
        city : /^([a-z]|[A-Z]){1,15}$/,
        address : /^[#.0-9a-zA-Z\s,-]+$/,
        email : /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        password : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        creditCardNumber : /^([0-9]{4}[- ]?){3}[0-9]{4}$/,
        creditCardName : /^([a-z]|[A-Z]){1,20}$/,
        creditCardCvc : /^[0-9]{3,4}$/,
        creditCardExpirationDate : /^(0[1-9]|1[0-2])\/(([0-9]{4})|([0-9]{2}))$/
    },
    classes : {
        validClassName : 'mb-4 form-control is-valid',
        inValidClassName : 'mb-4 form-control is-invalid',
        defaultClassName : 'mb-4 form-control'
    }
};

export default Constants;