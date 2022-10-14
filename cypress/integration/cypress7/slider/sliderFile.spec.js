///<reference types="cypress" />

describe('verify the slider functionality',function(){
    it('check the slider functionality',function(){
        cy.visit('http://127.0.0.1:5500/cypress/integration/cypress7/slider/index1.html')
        cy.get('#rangeone').invoke('val',"82").trigger('change')
        cy.get('#one').should('have.text',80)

        cy.get('#rangetwo').invoke('val',"66").trigger('change')
        cy.get('#two').should('have.text',70)
    })

    it('slider test at the automation site',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('div#slider span').invoke('attr',"style",'left: 80%;')
    })
})