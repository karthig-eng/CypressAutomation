/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
cy.wrap($el).find('button').click()
}
})
        cy.get('img[alt=Cart]').click();
        //cy.get('.cart-icon > img').click();//cy
        //cy.get('.cart-preview > .action-block > button').click();//cy
        cy.contains('PROCEED TO CHECKOUT').click();
        //cy.get(':nth-child(14)').click();
        cy.contains('Place Order').click();

        























    })
})