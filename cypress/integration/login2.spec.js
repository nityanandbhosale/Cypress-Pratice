


describe('verify the login functionality',function(){
    it('verify the login functionalty for valid mail id',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').last().should('have.text','Logged In Successfully')
    })
})