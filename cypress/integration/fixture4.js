///<reference types="cypress" />


// here we verify the login functionality by call the fixture file

describe('verify the login functionality by call the fixture file',()=>{

    it('verify the login functionality',()=>{

        cy.fixture('multiple_username').then((info)=>{
            info.forEach(data => {
                cy.visit('http://practice.automationtesting.in/my-account/')
                cy.get('#username').type(data.username)
                cy.get('#password').type(data.password)
                cy.get('#rememberme').click()
                cy.get('input[value="Login"]').click()
                cy.contains('Logout').click()
                
            });
        })
    })

})