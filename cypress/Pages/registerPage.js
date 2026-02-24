export class registerPages{

// store the locators 
// Need to create an object and inside the object we can store the Locator in key values format 

Weblocators= {

firstName:'#input-firstname',
lastName: '#input-lastname',
email:'#input-email',
telephone:'#input-telephone',
password:'#input-password',
passwordConfirm:'#input-confirm',
policyCheckbox: 'input[type="checkbox"]',
continue: '.btn.btn-primary'

}

//Method declaration 

openURL(){
    cy.visit(Cypress.env('URL'))
}

enterFirstName(FName){
    cy.get(this.Weblocators.firstName).type(FName)
}
enterlastName(LName){
    cy.get(this.Weblocators.lastName).type(LName)
}
enteremail(email){
    cy.get(this.Weblocators.email).type(email)
}
entertelephone(phoneNo){
    cy.get(this.Weblocators.telephone).type(phoneNo)
}
enterpassword(password){
    cy.get(this.Weblocators.password).type(password)
    cy.get(this.Weblocators.passwordConfirm).type(password)
}
selectCheckbox(){
    cy.get(this.Weblocators.policyCheckbox).check()
}
clickOnContinue(){
    cy.get(this.Weblocators.continue).click()
}


}