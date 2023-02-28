///<reference types="cypress" />


describe('verify the amazon search functionality', () => {
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false
    // })
    it('TC_01 verify the amazon search product functionality', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone 13')
        cy.get('.s-suggestion-container').find('div').each(function (el) {
            cy.wrap(el).invoke('text').then(function (txt) {
                if (txt.trim() == 'iphone 13') {
                    cy.wrap(el).click({ force: true })
                    return false
                }
            })
        })
        cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"] >a').find('span').each(function (el) {
            // cy.wrap(el).invoke('text').then(function (txt) {
            //     let text = el.text()
            //     // cy.log(text)
            let text = el.text()
            if (text == 'Apple iPhone 13 (256GB) - Starlight') {
                cy.wrap(el).should('be.visible').parent().invoke('removeAttr', 'target').click({ force: true })
            }
        })
        cy.get('.a-price-whole').first().should('contain','74,999')
        cy.get('.a-dropdown-container').eq(5).find('select').select(1 ,{force:true}).should('have.value','Key 2')
        cy.get('#add-to-cart-button').click()
        cy.wait(4000)
        cy.get('#attach-sidesheet-view-cart-button-announce').click({force:true})
    })
})


