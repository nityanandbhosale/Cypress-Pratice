///<reference types="cypress" />

describe('verifynthe clander functionality',function(){
    it('calander functionality',function(){
        cy.visit('http://qalab.pl.tivixlabs.com/')
        cy.get('#country').select('Poland').should('have.value',1)
        cy.get('#city').select('Paris').should('have.value',4)     
        cy.get('#model').type('Mercidies Benz')   
        cy.get('#pickup').type('2022-08-20')
        cy.get('#dropoff').type('2022-08-22')
        cy.get('button[type="submit"]').click()
    })
})