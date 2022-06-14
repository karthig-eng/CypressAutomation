/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My First Test Suite', function()
{
    it('My First test case',function(){
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe")
        //click Mentorship link in frame
        cy.wait(2000)
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length',2)



    })
})