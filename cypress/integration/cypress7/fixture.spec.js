///<reference types="cypress" />






describe('',()=>{

    let data 
    before(function(){
        cy.fixture('user').then((res) => {
            //cy.log(res)
            data =  res
        })
    })    




    it('verify th contact us form',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name = "first_name"]').type(data.firstname)
        cy.get('input[name = "last_name"]').type(data.lastname)
        cy.get('input[name = "email"]').type(data.email)
        cy.get('textarea[name = "message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})