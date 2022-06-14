// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//4 elements selected

Cypress.Commands.add('selectanyproduct', (product) => {
     cy.get('h4.card-title').each(($e1,index,$list)=>
{
    //get text from all ele
    const phone=$e1.text();
    //if text includes Blackberry
    if(phone.includes(product))
    {
        //from 4 add button select 2nd and 3rd button and click
        cy.get('button.btn.btn-info').eq(index).click(); 

    }

})
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
