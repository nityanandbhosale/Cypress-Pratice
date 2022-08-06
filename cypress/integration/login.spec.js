// verify the url varous functionality

describe('verify the various command',function(){

    it('verify the google functionality',function(){
        
        cy.visit('https://www.google.com')
    })

    //open from the base url
    it('verify the search functionality for google',function(){
        cy.visit('/')
    })

    //verify the google by visit url
    it('verify the search functionality for google',function(){
        let url = Cypress.config().baseUrl
        cy.visit(url)
    })

//     // for the different envorment url
//     it.only('verify the base url',function(){
//         let baseurl =Cypress.config().baseUrl
//         cy.visit(baseurl)
//     })
 })