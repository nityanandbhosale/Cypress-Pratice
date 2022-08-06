///<reference types="cypress" />

// in this testcase we call the data from fixture

describe('verify the fixture file data',()=>{

    let data ;
    before(function(){
        
        cy.fixture('username').then(function(obj){
        data = obj
    })
    })

    it('verify the login functionality',()=>{
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#username').type(data.username)
        cy.get('#password').type(data.password)
        cy.get('#rememberme').click()
        cy.get('input[value="Login"]').click()
        // cy.contains('Dashboard').should('have.text','Dashboard')
    })
})