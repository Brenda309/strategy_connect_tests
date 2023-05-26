/// <reference types="cypress" />

import { TechnicalDueDiligencePage } from "./5-technicalDueDiligence.page";
import { CommercialDueDiligencePage } from "./6-commercialDueDiligence.page";

export class StrategyServicePage{
    title = '.xl\\:text-5xl';
    knowMoreTechnologyDueDiligenceLocator = ':nth-child(1) > .pt-4 > :nth-child(1) > .rounded';
    knowMoreCommercialDueDiligenceLocator = ':nth-child(2) > .pt-4 > :nth-child(1) > .rounded';

    clickKnowMoreTechnologyDueDiligence(){
        cy.get(this.knowMoreTechnologyDueDiligenceLocator).click();
        return new TechnicalDueDiligencePage();
    }
    clickKnowMoreCommercialDueDiligence(){
        cy.get(this.knowMoreCommercialDueDiligenceLocator).click();
        return new CommercialDueDiligencePage();
    }
}
