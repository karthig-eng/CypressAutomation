class Product
{
getCheckout()
{
    return cy.get('.nav-link.btn.btn-primary')
}
getTotal()
{
    return cy.get('tr td:nth-child(4) strong')
}
getTotalamount()
{
    return cy.get('h3 strong')
}
}
export default Product;