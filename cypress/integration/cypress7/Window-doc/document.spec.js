///<reference types="cypress" />



// here we see about the window document

describe('verify the window document ',function(){

    before('',function(){
        cy.visit('https://webdriveruniversity.com/')
    })

    /// by document title method
    it('TC01 verify the document title method',function(){
        cy.document().then(function(doc){
            // cy.log(doc.title)
            expect(doc.title).to.eql('WebDriverUniversity.com')
        })
    })

    // by cypress.title method

    it('verify the cy.title method',function(){
        cy.title().then(function(tit){
            // cy.log(tit)
            expect(tit).to.eql('WebDriverUniversity.com')
        })
    })

    // hight and width of the page

    it('TC03 verify hight and width of the pade',function(){
        cy.document().then(function(doc){
            cy.log(doc)
            let jq = Cypress.$(doc)
            cy.log(jq)
            cy.log(jq.height())
            cy.log(jq.width())
            cy.log(jq.innerHeight())
            cy.log(jq.innerWidth())
            cy.log(jq.removeAttr)
        })
    })

    // viewport method

    it('verify the viewport method',function(){
        cy.viewport('samsung-note9','landscape')
        cy.viewport('samsung-note9','portrait')
        cy.viewport(1000,1000,'landscape')
        cy.viewport(1000,900,'portrait')
    })

    //cookie by document method

    it('verify the cookie by document method',function(){
        cy.document().then(function(doc){
            //let get the cookie
            cy.log(doc.cookie)

            // add the cokkie
            doc.cookie = "minskole = tester"
            cy.log(doc.cookie)

            // update cookie
            doc.cookie = "minskole = developer"
            cy.log(doc.cookie)

        })
    })

    // cookie by the cypress method

    it.only('verify the cookie by the cyptress method',function(){
        cy.setCookie('edureka','fullstack')

        // add the cookie
        cy.setCookie('minskole','cypress')

        //update cookie
        cy.setCookie('edureka','datascientist')

        //retrive cookie
        cy.getCookie('edureka')

        // delete cookie

        cy.clearCookie('edureka')
    })


})