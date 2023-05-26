/// <reference types="cypress" />

import { HomePage } from "./2-home.page";

export class NavigateToURL{
    navigateToURL(path){
        cy.visit(path);
        return new HomePage();
    }
}
