///<reference types="cypress" />

// here we read the data from the given object


describe('verify the data from the given object', () => {

    let info = {
        username: "bhosalenityanand5@gmail.com",
        passw: "Nityanandb@2000"
    }

    it('verify the login with hardcode value',()=>{

        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#username').type('bhosalenityanand5@gmail.com')
        cy.get('#password').type('Nityanandb@2000')
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
        cy.contains('Dashboard').should('have.text','Dashboard')

    })
     
     // here we vrify the login with retrive data

    it('verify the given data', () => {

        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#username').type(info.username)
        cy.get('#password').type(info.passw)
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
        cy.contains('Dashboard').should('have.text','Dashboard')
    })
})