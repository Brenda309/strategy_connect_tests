/// <reference types="cypress" />

export class LoginPage{
    emailLocator = '#mui-1';
    nextLocator = '.MuiButton-root'
    errorMessageLocator = '.css-h7yiwe';

    enterEmail(email){
        cy.get(this.emailLocator).type(email);
    }
    clickNextButton(){
        cy.get(this.nextLocator).click();
    }
}
