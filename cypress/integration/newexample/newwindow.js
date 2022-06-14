/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //to open in same window by preventing it from open in new window
    //2 md 1)remove target attr 2) get href attr of link open in new window and open it in same win
    //but one problem arises bcz when opening in same win the url should looks like subdomain
    //get attribute value using prop() after resolving it , bcz it is a jquery command
    cy.get('#opentab').then(function(e1){
      const url=e1.prop('href')
      cy.log(url)
      cy.visit(url);
      cy.url().should('include','rahulshetty')
      cy.url().should('not.be.include','Automation')
      cy.go('back');
     })
    })
})