  /// <reference types="cypress" />
  //address that is where home page located
  //.. means --> integration/
  import HomePage from '../PageObjects/HomePage'
  import Product from '../PageObjects/Product'
  import Checkout from '../Pageobjects/Checkout'

  describe('My First Test Suite', function()
  {
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)//pass data from example.json
        {
          this.data= data//access globally if add this
        })
      })
    it('My First test case',function(){
        //test step
        //create object for homepage Pageobjects
        
          const hp=new HomePage()
          const pd=new Product()
          const co=new Checkout()
         // cy.visit("https://rahulshettyacademy.com/angularpractice/");
         cy.visit(Cypress.env('url'))//get url from cypress.json file
          hp.getName().type(this.data.name);
          hp.getGender().select(this.data.gender)
        //assertion to check the minlength prop has value 2(minlenlength=2) for name 
        //assert whatever type in name should come in other box as well
        //confirm Enterpreneur is disabled
          hp.getName().should('have.value',this.data.name)
          hp.getName().should('have.attr','minlength','2')
          hp.getEnterpre().should('be.disabled')
          //cy.pause();
          //new
          //click shop
          //cypress.Config('defaultCommandTimeout',8000)
          hp.getShoptab().click();
          //forEach function will execute for each element in product array
          //so each time it will call the selectanyproduct fn in commands
          //in that way it wil select every element present in array
          this.data.product.forEach(element => {
              cy.selectanyproduct(element);
          });
          pd.getCheckout().click();
          var sum=0;
         pd.getTotal().each(($e1,index,$list)=> {
          const total= $e1.text();
         
         // console.log(total);
         //cy.log(total)
         var result=total.split(" ")//R. 45687 R. -->result[0], 45687--->result[1]
         result =result[1].trim();//to trim extra whit space in num
         sum=Number(sum)+Number(result);
         cy.log(result);
         cy.log(sum);
      }).then(function()
      {
        cy.log("Actual value")
        cy.log(sum);
       
      })
      //resolve the promise bcz trim fn everything not cypress it is js
      //so it might skip the steps and try to print sum value to avoid resolve promise
       
      pd.getTotalamount().then(function(ta){
         const am=ta.text();
         var to=am.split(" ")
         to=to[1].trim();
         cy.log("Expected value")
         cy.log(to);
         expect(Number(to)).to.equal(sum)
       }
       )

      //checkout
        
        co.checkoutbtn().click();
        co.getlocation().type('india');
        co.selectcountry().click();
        co.check().click()
        co.purchase().click();
        //co.alert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');

        co.alert().then(function(element)
        {
          const actualText = element.text()//text() jquery so resolve promise
          expect(actualText.includes("Success")).to.be.true//chai
        }
        )
        
        


















    })
  })