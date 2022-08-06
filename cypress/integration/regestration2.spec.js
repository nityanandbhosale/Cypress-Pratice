///<reference types="cypress" />

// cheaking the login

describe('verify the login',()=>{
    it('login functionality',()=>{

        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('nityanandbhosale2000@gmail.com')
        cy.get('[data-qa="login-password"]').type('Nityanandb@2000')
        cy.get('[data-qa="login-button"]').click()
        cy.get('a').find('b').should('have.text','Nityanand')
        cy.get('[href="/delete_account"]').click()
        cy.get('h1').should('have.text','Delete Account')
       // Your email or password is incorrect!
    })

    // // for invalid

    // it('verify for the invalid',()=>{
    //     cy.visit('https://www.automationexercise.com/login')
    //     cy.get('li').find('a').should('be.visible')
    //     cy.get('[href="/login"]').click()
    //     cy.get('div h2').should('have.text','Login to your account')
    //     cy.get('[data-qa="login-email"]').type('nityanandbhosale2000@gmail.com')
    //     cy.get('[data-qa="login-password"]').type('Nityanandb@20')
    //     cy.get('[data-qa="login-button"]').click()
    //     cy.get('form p').first().should('have.text','Your email or password is incorrect!')
    // })

    // // for logout

    it.only('verify the logout functionality',()=>{
        cy.visit('http://automationexercise.com')
        cy.get('li').find('a').should('be.visible')
        cy.get('[href="/login"]').click()
        cy.get('div h2').eq(0).should('have.text','Login to your account')
        cy.get('[data-qa="login-email"]').type('nityanandbhosale2000@gmail.com')
        cy.get('[data-qa="login-password"]').type('Nityanandb@20')
        cy.get('[data-qa="login-button"]').click()
        cy.get('div h2').eq(0).should('have.text','Login to your account')

    })

    // for email elready existed
    it.only('verify the email already existed',()=>{
        cy.visit('http://automationexercise.com')
        cy.get('li').find('a').should('be.visible')
        cy.get('[href="/login"]').click()
        cy.get('div h2').eq(2).should('be.visible')
        cy.get('input[name="name"]').type('Nityanand')
        cy.get('input[name="email"]').last().type('nityanandbhosale2000@gmail.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('form p').first().should('have.text','Email Address already exist!')
    })

    
})