///<reference types="cypress" />

describe('verify the shadow dom functionality',function(){
    it.only('TC01 shadow dom verification',function(){
        cy.visit('http://127.0.0.1:5501/cypress/integration/cypress7/shadow-dom/index.html')
        cy.get('#channelname').type('Nityanand').should('have.value','Nityanand')
        // cy.get('h2').should('have.text','I belong to Shadow DOM')
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow()
        .find('h2').should('have.text','I belong to Shadow DOM')
        // .find('#name').type('Nityanand').should('have.value','Nityanand')
    })

    // it("TC02 verify the shadow dom by destructure",function(){
    //     cy.visit('http://127.0.0.1:5500/cypress/integration/cypress7/shadow-dom/index.html')
    //     cy.contains('Add Shadow DOM').click()
    //     cy.get('#shadowHost').then(function(el){
    //         // cy.log(el)
    //         let [dome] = el.get()
    //         expect(dome.shadowRoot.querySelector('input').value).to.eql('')
    //     })
    // })
})