///<reference types="cypress" />

describe('verify the iframe functionality', function () {


    // let getbodyOfIframe = function (id) {
    //     return cy.get(`#${id}`)
    //     .its('0.contentDocument.body').should('not.be.empty')
    //     .then(cy.wrap)
    // }
    it('validate the iframe functionality by javascript method', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.get('a[href="index.html"]').click()
        cy.get('#frame').then(function (iframe) {
            cy.log(iframe)
            let framebody = iframe[0].contentDocument.body
            cy.log(framebody)
            cy.wrap(framebody).as('fbdy')
            cy.get('@fbdy').find('a[href="index.html"]').should('have.text', 'Home')
            cy.get('@fbdy').find('[class="left carousel-control"]').click()

        })
    })

    // it.only('validate the iframe by jquery method', function () {
    //     cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    //     cy.get('#frame').then(function (iframe) {
    //         let framebdy = iframe.contents().find('body')
    //         // cy.log(framebdy)
    //         cy.wrap(framebdy).as('fbdy')
    //         cy.get('@fbdy').find('a[href="index.html"]').should('have.text', 'Home')
    //     })
        
    // })

    // it('check the iframe by using th utility',function(){
    //     getbodyOfIframe('frame').then(function(fbody){
    //         cy.wrap(fbody).as('body')
    //         cy.get('@body').find('a[href="index.html"]').should('have.text','Home')
    //     })
    // })
})