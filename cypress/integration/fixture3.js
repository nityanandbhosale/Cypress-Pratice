///<reference types="cypress" />


// here we import the fixture file

import info from '../fixtures/multiple_username.json'

describe('verify the login functionality by import the fixture file',()=>{

    info.forEach((data,index)=>{

        it(`verify the login functionality ${index}`,()=>{

            cy.visit('http://practice.automationtesting.in/my-account/')
            cy.get('#username').type(data.username)
            cy.get('#password').type(data.password)
            cy.get('#rememberme').click()
            cy.get('input[value="Login"]').click()
            cy.contains('Dashboard').should('be.visible')
        })
        
    })
})

// https://the-internet.herokuapp.com/drag_and_drop
// https://kitchen.applitools.com/ingredients/drag-and-drop

