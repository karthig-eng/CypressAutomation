/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function()
    {
        //checkbox
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //click the check box,to check it is checked, to check it has value option 1
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')        
        //cy.get('input[type=checkbox]').check();//to check all check boxes

        cy.get('input[type="checkbox"]').check(['option2'])
        //static dropdown
       // locate the dd, select one option, check it has selected option 1
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        //Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.wait(3000);
        cy.get('.ui-menu-item div'). should('have.length',3);

       cy.get('.ui-menu-item div').each(($e1,index,$list)=> {
            if($e1.text()==="India")
            {
              //cy.wrap($e1).click();
              $e1.click()
            }

        })

// assertion to check if correct option is selected
      cy.get('#autocomplete').should("have.value","India");


















    })
})