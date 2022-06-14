/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)//pass data from jason
        {
          this.data= data//access globally if add this
        })
      })
    it('My First test case',function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get(':nth-child(1)>.form-control').type(this.data.name);
        cy.get('select.form-control').select(this.data.gender)
        //assertion to check the minlength prop has value 2(minlenlength=2) for name 
        //assert whatever type in name should come in other box as well
        //confirm Enterpreneur is disabled
        cy.get(':nth-child(4)>.ng-pristine').should('have.value',this.data.name)
        cy.get(':nth-child(1)>.form-control').should('have.attr','minlength','2')
        cy.get('input#inlineRadio3').should('be.disabled')
        cy.pause();
        //new
        //click shop
        cy.get('a[href="/angularpractice/shop"]').click();


        //forEach function will execute for each element in product array
        //so each time it will call the selectanyproduct fn in commands
        //in that way it wil select every element present in array
        this.data.product.forEach(element => {
            cy.selectanyproduct(element);
        });
        
        
        


















    })
})