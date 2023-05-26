/// <reference types="cypress" />

import data from "../../fixtures/data.json";

import {NavigateToURL} from '../../pages/1-navigateToURL.page'
import {HomePage} from '../../pages/2-home.page'
import { LoginPage } from "../../pages/7-login.page";
import { HeaderSection } from '../../pages/4-headerSection';

describe('Login', () => {
    const navigate = new NavigateToURL();
    const homepage = new HomePage();
    const headerSection = new HeaderSection();
    const loginPage = new LoginPage();

    beforeEach(()=>{
        /*
        Use the created "NavigateToURL" class instance ("navigate" on line 7 above) to call "navigateToURL" function from NavigateToURL class 
        in the "1-navigatetoURL.page.js" file, pass in "/" to navigate to "https://www.strategyconnect.co/" page:
        */
       navigate.navigateToURL('/');

       //Verify if the URL after navigation is correct:
       cy.url().should('eq', data.homePageURL);

       //Verify if the browser tab tible contains text 'Access Top 1% Experts - Drive Real Business Impact | StrategyConnect':
       cy.title().should('eq', data.tabTitle);

       //Verify if logo is available on the home page:
       cy.get(headerSection.logo).should('be.visible');
       
       //Verify some text on the home page;
       cy.get(homepage.precisionTextLocator).should('have.text', data.titleHomePage);
       cy.get('.w-36').should('have.text', 'Get Started');
    });

    it('block logging in with invalid email', () => {
        //Click the Login button
        headerSection.clickLogin();
        cy.url().should('eq', data.loginPageURL);
        cy.title().should('eq', data.loginPageTabTitle);
        
        //Enter invalid username
        loginPage.enterEmail(data.invalidEmail);

        //Click the Next button
        loginPage.clickNextButton();
        cy.wait(5000);

        //Verify if the user is blocked
        cy.get(loginPage.errorMessageLocator).invoke('text').then((text) => {
            expect(text).equal(data.invalidEmailMessage);
        });
    });
});
