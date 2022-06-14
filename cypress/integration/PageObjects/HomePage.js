class HomePage
{
getName()
{
    return cy.get(':nth-child(1)>.form-control')
}
getGender()
{
   return cy.get('select.form-control')
}
getTwoway()
{
    return cy.get(':nth-child(4)>.ng-pristine')
}
getEnterpre()
{
   return cy.get('input#inlineRadio3')
}
getShoptab()
{
    return cy.get('a[href="/angularpractice/shop"]')
}
}
export default HomePage;