/// <reference types="cypress" />

import { StrategyServicePage } from "./3-strategyServices.page";

export class HomePage{
    precisionTextLocator = '.mt-20 p.lg\\:text-5xl.text-lg';
    knowMoreTechnologyDueDiligenceLocator = '.home-grid > :nth-child(1) > .purple_re';
    knowMoreCommercialDueDiligenceLocator = ':nth-child(2) > .purple_re';

    clickKnowMoreTechnologyDueDiligence(){
        cy.get(this.knowMoreTechnologyDueDiligenceLocator).click();
        return new StrategyServicePage();
    }
    clickKnowMoreCommercialDueDiligence(){
        cy.get(this.knowMoreCommercialDueDiligenceLocator).click();
        return new StrategyServicePage();
    }
}
