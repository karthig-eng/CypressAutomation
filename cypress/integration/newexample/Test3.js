/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length', 4);// to select the element which is visible on app.
       cy.get('.products').as('pr')
        cy.get('@pr').find('.product').should('have.length',4);
        cy.get('@pr').find('.product').eq('1').contains('ADD TO CART').click().then(function()
        {
            console.log('sf')//it is not cypress command
            //so manually resolve the Promise by using then() saying that this sf will
            //be in console after 12 th line.
        });
    
    
    cy.get('@pr').find('.product').each(($e1,index,$list)=> {
        const textveg= $e1.find('h4.product-name').text()//take all the text of elements cauliflower..
        //if it has subtext cashews 
        //find the button in cashew and click it
        if(textveg.includes('Cashews'))
        {
            cy.wrap($e1).find('button[type=button]').click();
        }
    })
    //to check whether the logo displayed as GREENKART
    cy.get('.brand').should('have.text','GREENKART');
    
    cy.get('.brand').then(function(element)
    {
        cy.log(element.text())//log in Testrunner
    })





}  )
 
 
 
}  )