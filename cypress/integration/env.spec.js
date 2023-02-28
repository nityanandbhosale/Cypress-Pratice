///<reference types="cypress" />



describe('verify th env functionality',()=>{
    it('verify the env',()=>{
        cy.visit(Cypress.env('production'))
        let envfile = Cypress.env()
        cy.log(envfile)
    })
})