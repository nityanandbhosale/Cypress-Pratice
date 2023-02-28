// see the flipcart functionality

describe('vrify the flipcart functionality',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('TC_01 Verify the add to cart functionality',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('shirt')
        cy.get('._3izBDY').find('div[class="lrtEPN _17d0yO"]').each(function(el){
            let text = el.text()
            cy.log(text)
        })
    })
})