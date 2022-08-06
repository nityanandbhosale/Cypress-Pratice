
describe('verify the various command',function(){

    it('verify the google functionality',function(){
        
        // cy.visit('https://www.google.com')
        let url = Cypress.config().baseUrl;
        cy.visit(url)
    })
})
