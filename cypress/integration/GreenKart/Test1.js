/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length', 4);// to select the element which is visible on app.
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq('1').contains('ADD TO CART').click();//get ,find,index(eq)
    //get to locate element anywhere in the app
    //find to locate element in the arry elemnt got using get
    //eq to select specefic element from array of ele
    //contains to match the text with the expected text
    /*dynamically identify the element*/
    //cy.get('.products').find('.product') has 4 elements
    //take each element in each loop
    
    cy.get('.products').find('.product').each(($e1,index,$list)=> {
        const textveg= $e1.find('h4.product-name').text()//take all the text of elements cauliflower..
        //if it has subtext cashews 
        //find the button in cashew and click it
        if(textveg.includes('Cashews'))
        {
            cy.wrap($e1).find('button[type=button]').click();
        }
    })
    //text is not a cypress command so it is an error without resolving it manually using then

    //cy.log(cy.get('.brand').text())---->error(text() is a jquery command so resolve it using then()
    //const logo = cy.get('.brand')------->error (not resolved so resolve manually using then)
    //cy.log(logo.text());
    //Alternatively use below method to solve it
    cy.get('.brand').then(function(element)
    {
        cy.log(element.text())//text is not a cypress command so resolve it using then()
    })





}  )
 
 
 
}  )