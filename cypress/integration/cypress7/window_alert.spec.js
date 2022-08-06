///<reference types="cypress" />

// here we see about the window alert

describe('verify the window alerts in cypress ', () => {
    it('TC01 verify the alert functionality', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', function (str) {
            // cy.log(res)
            expect(str).to.eql('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })

    // for the confirm alert for ok click
    it('TC02 verify the confirm alert for Ok click functionality', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
        })

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    // for the confirm alert for cancel click
    it('TC03 verify the confirm alert functionality on cancel click', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
        })

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    // for the alert promt
    it.only('verify the alert promt  alert', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain', '')



    })

})