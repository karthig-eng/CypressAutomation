/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function()
    {
        cy.visit("https://qaclickacademy.com/practice.php");
        cy.get('#alertbtn').click();
        cy.wait(2000);
        cy.get('#confirmbtn').click();
        //(str) got from application
        //.to.equal(some text) is Expected
        //cypress automatically clicks ok
        cy.on('window:alert',(str)=>
        {
            //Mocha
             //check whether the 2 are equal
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //click open Tab
        //after that it will open in new tab
        //cypress does not support opening in new tab
        //therefore we are trying to remove target attribute to open in same window
        //follow below to open in same window

        cy.get('#opentab').invoke('removeAttr','target').click();
         //check if the url includes qaclickacademy
         cy.url().should('include','rahulshetty')
         //go backwards from child to main page
        cy.go('back')
cy.url().should('include','rahulshetty')
        
       

        























    })
})