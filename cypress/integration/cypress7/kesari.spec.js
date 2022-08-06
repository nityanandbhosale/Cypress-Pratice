describe('verfy kesari',function(){
    it('verify the world tour',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('.col-sm-5').find('h4').should('have.text','World Tours :')
    })
})