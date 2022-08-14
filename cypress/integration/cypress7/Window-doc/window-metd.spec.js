///<reference types="cypress" />

// here we see about the vairious method of window and cypress 

describe('verify the window method by javascript', function () {
    it('TC01 Window method by javascript', function () {
        cy.visit('https://automationteststore.com/')
        cy.window().then(function (win) {
            // cy.log(win.location)
            expect(win.location.href).to.eql('https://automationteststore.com/')
            expect(win.location.host).to.eql('automationteststore.com')
            expect(win.location.hostname).to.eql('automationteststore.com')
            expect(win.location.protocol).to.eql('https:')
            expect(win.location.pathname).to.eql('/')
        })
    })

    // window method to reload page
    it('TC02 validate window reload the method', function () {
        cy.visit('https://automationteststore.com/')
        cy.window().then(function (win) {
            // cy.location(win.location)
            win.location.reload()
            cy.contains('Home').should('have.text', 'Home')
        })
    })

    // window for backward method
    it('TC03 validate the wondow back method', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('[class="nav-pills categorymenu"]>li ').eq(7).click()
        cy.get('.heading1 span').eq(0).should('have.text', 'Books')

        // i have to come back from this page then
        cy.window().then(function (win) {
            win.history.back()
            cy.contains('Home').should('have.text', 'Home')
            cy.url().should('eql', 'https://automationteststore.com/')

        })
        cy.window().then(function (win) {
            win.history.forward()
            cy.get('.heading1 span').eq(0).should('be.visible', 'Books')

        })
    })

    // window foeward method
    it('TC04 validate the window forward method', function () {
        cy.visit('https://automationteststore.com/')
        cy.window().then(function (win) {
            win.history.forward()
            // cy.get('.heading1 span').eq(0).should('contains','Books')

        })
    })

    // now see the all method by cypress
    it('TC05 validate all method by cypress', function () {
        cy.visit('https://automationteststore.com/')
        cy.location('href').should('eq', 'https://automationteststore.com/')
        cy.location('host').should('eq', 'automationteststore.com')
        cy.location('hostname').should('eq', 'automationteststore.com')
        cy.location('protocol').should('eq', 'https:')
        cy.location('pathname').should('eq', '/')
    })

    // reloead method by cy
    it('TC06 valiadate reload method', function () {
        cy.visit('https://automationteststore.com/')
        cy.reload()
    })

    // forward and back method
    it.only('TC06 valiadate reload method', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('[class="nav-pills categorymenu"]>li ').eq(7).click()
        cy.get('.heading1 span').eq(0).should('have.text', 'Books')

        cy.go('back')
        cy.url().should('eql', 'https://automationteststore.com/')

        cy.go('forward')
        cy.get('.heading1 span').eq(0).should('have.text', 'Books')
        cy.go(-1)
        cy.go(1)
    })
})