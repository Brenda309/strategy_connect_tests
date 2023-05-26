/// <reference types="cypress" />

import data from "../../fixtures/data.json"

import {NavigateToURL} from '../../pages/1-navigateToURL.page'
import {HomePage} from '../../pages/2-home.page'
import { StrategyServicePage } from "../../pages/3-strategyServices.page";
import { HeaderSection } from '../../pages/4-headerSection';
import { TechnicalDueDiligencePage } from "../../pages/5-technicalDueDiligence.page";

describe('Service Packages', () => {
    const navigate = new NavigateToURL();
    const homepage = new HomePage();
    const headerSection = new HeaderSection();
    const strategyService = new StrategyServicePage();
    const technicalDueDiligence = new TechnicalDueDiligencePage();


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

    it('allows to Know More about "Technology Due Diligence".', () => {
        //Click the "KnowMore" button on "Technology Due Diligence" section on Home page
        homepage.clickKnowMoreTechnologyDueDiligence();
        //Verify if the Strategy Service page got launched
        cy.get(strategyService.title).should('have.text', data.titleStrategyService);
        //Click the "KnowMore" button on "Technology Due Diligence" section on Strategy Service
        strategyService.clickKnowMoreTechnologyDueDiligence();
        //Verify if the Technical Due Diligence Page has been launched
        cy.url().should('eq', data.homePageURL + data.URLtechnicalDueDiligencePage);
        cy.get(technicalDueDiligence.objectiveLocator).should('be.visible');
    });

    it('allows to Know More about "Technology Due Diligence".', () => {
        //Click the "KnowMore" button on "Technology Due Diligence" section on Home page
        homepage.clickKnowMoreTechnologyDueDiligence();
        //Verify if the Strategy Service page got launched
        cy.get(strategyService.title).should('have.text', data.titleStrategyService);
        //Click the "KnowMore" button on "Technology Due Diligence" section on Strategy Service
        strategyService.clickKnowMoreTechnologyDueDiligence();
        //Verify if the Technical Due Diligence Page has been launched
        cy.url().should('eq', data.homePageURL + data.URLtechnicalDueDiligencePage);
        cy.get(technicalDueDiligence.objectiveLocator).should('not.be.visible');
    });
});