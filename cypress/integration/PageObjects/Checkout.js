class Checkout
{
    checkoutbtn()
        {
            return cy.get('.btn.btn-success')
        }

    getlocation()
    {
        return cy.get('#country')
        
    }
 selectcountry()
    {
        return cy.get('.suggestions > ul > li > a');
    }
    check()
    {
        return cy.get('.checkbox > label');
    }
    purchase()
    {
        return cy.get('.ng-untouched > .btn');
    }
    alert()
    {
        return cy.get('.alert');
    }
}
export default Checkout;