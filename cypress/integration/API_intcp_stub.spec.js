///<reference types="cypress" />

import payload from '../fixtures/stubFile.json'

// stubbing ---> means the mock the api responce and add your own data in api responce 
//                 by overwriting the main responce

describe('Tubbing the Api responce',()=>{
    it('TC01 mock api responce and stub your own data',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            statusCode:200,
            body:{
                "postId": 1,
                "langauge":"hindi",
                "id": 10,
                "name": "glem Bhamutho",
                "email": "cypress@1950.com",
                "body": "cypress is the best tool for automation "
              }
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment').then(function(responce){
            cy.log(responce)
        })
    })

    // here i import my stubbing data from fixture file

    it('stubbing the data from fixture file',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            statusCode:200,
            
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment')
    })

    // now check the ststusCode for error

    it('verify the stub statusCode and of API responce',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            statusCode:404
            
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getComment')
    })

    it.only('verify',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        },{
            name:"nityanand"
        }).as('users')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@users').then(function(responce){
                expect(responce.name).to.eql('nityanand')
        })
    })

    it('verify the users',()=>{
        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts",',{fixture:'stu'})
    })
})