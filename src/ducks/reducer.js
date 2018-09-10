const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = {
    type: "UPDATE_LOAN_TYPE"
}

const UPDATE_PROPERTY_TYPE = {
    type: "UPDATE_PROPERTY_TYPE"
}

function reducer(state = initialState, action) {
    switch(action.type) {
    case "UPDATE_LOAN_TYPE" {
        return (
            initialState.loanType = "UPDATE_LOAN_TYPE"
        );
    }
    case type: "UPDATE_PROPERTY_TYPE" {
        retun (
            initialState.propertyType = "UPDATE_PROPERTY_TYPE"
        );
    }
}

function updateLoanType(loanType){
    return {
    type: "UPDATE_LOAN_TYPE",
    payload: loanType
    }
}

function updatePropertyType(propertyType){
    return {
    type: "UPDATE_LOAN_TYPE",
    payload: propertyType
    }
}

export default reducer;