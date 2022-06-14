describe('MyTestSuite', function() 
{

    it('Verify Title of the Page', function()
     {
      cy.visit("https://demo.nopcommerce.com/")
      cy.title().should('eq','nopCommerce demo store')
    })
    it('Verify Title of Second  Page', function()
     {
      cy.visit("https://demo.nopcommerce.com/")
      cy.title().should('eq','nopCommerce store')
    })
  })