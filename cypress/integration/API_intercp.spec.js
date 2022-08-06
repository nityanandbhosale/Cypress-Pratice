///<reference types="cypress" />

// here we learn about the to wait foe the APi responce and then assert the responce

describe('To wait for the API responce and then assert',()=>{
    it.only('TC01 verify the Api responce after waiting',()=>{
        cy.intercept({
            method:'GET',
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:"Cypress is the good tool for testing"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment')
        // cy.get('.network-comment').should('contain','laudantium')
            
        
    })

    // again same 

    it('TC02 assert the response of API after wait',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as ('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment').then(function({response,request}){
            cy.log(request)
            cy.log(response)

            expect(request.method).to.eql('GET')
            expect(response.statusCode).to.eql(200)
            
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })

    // now post the comment

    it('TS03 post the comment and check the response',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function({response,request}){
            // cy.log(response)
            // cy.log(request)

            expect(response.statusCode).to.eql(201)
            expect(request.method).to.eql('POST')

            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })

    // now update the comment

    it('TS04 update comment assert the response',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('updateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-put btn btn-warning"]').click()
        cy.wait('@updateComment').then(function({response,request}){
            // cy.log(response)
            // cy.log(request)

            expect(response.statusCode).to.eql(200)
            expect(request.method).to.eql('PUT')
        })        
    })
})