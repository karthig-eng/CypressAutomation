/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function(){
        //txt box is visble or not
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        //radio
        cy.get('input[value="radio3"]').check().should('be.checked');






}  )
 
 
 
}  )