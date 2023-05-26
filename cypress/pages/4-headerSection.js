/// <reference types="cypress" />

import { LoginPage } from "./7-login.page";

export class HeaderSection{
    logo = '.items-center.cursor-pointer > :nth-child(1) > .h-6';
    loginLocator = '[href="https://platform.strategyconnect.co/login"]'

    clickLogin(){
        cy.get(this.loginLocator).click();
        return new LoginPage();
    }
}
