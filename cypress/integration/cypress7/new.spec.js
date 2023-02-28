///<reference types="cypress" />

describe('verify the data', () => {
    it('verify the mobiles names', () => {
        cy.visit('https://www.demoblaze.com/#')
        cy.get('.list-group >a').eq(1).click()
        cy.reload()
        cy.request({
            method: 'POST\0',
            url: "https://api.demoblaze.com/bycat"
        }).then(function (resp) {
            cy.log(resp)
        })
    })
})
