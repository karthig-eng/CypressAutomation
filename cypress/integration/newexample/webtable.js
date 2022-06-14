/// <reference types="cypress" />

describe('My First Test Suite', function()
{
    it('My First test case',function(){
        //txt box is visible or not
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //cy.get('tr td:nth-child(2)') to locate 2 nd column elements of the table
        // each to iterate each element of the 2nd column

        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=> {
            const text=$e1.text();
            if(text.includes("Python"))//if the ele has text Python
            {
                //to resolve promise use then
                //next() to get the sibling
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
             const pricetext=price.text()
             expect(pricetext).to.equal('25')
                })
            }
        
        })

//tr
   //td
   //td
   //td
// tr td:nth-child(2) so it grabs 2nd column elements
// check each and everything to find python
//3rd td has 25 to move to sibling put next()
//next cannot directly apply.
//so use   cy.get('tr td:nth-child(2)').eq(index) ie eq(7) and put next to find the sibling 25



}  )
 
 
 
}  )