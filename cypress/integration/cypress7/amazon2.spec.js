///<reference types="cypress" />

describe('verify the prise functionality', function () {
    it.only("TC 03 verify best selllar page first element ", () => {
        cy.visit("https://www.amazon.in/");
        cy.get("#nav-xshop>a").each((el) => {
            cy.log(el.text());
            cy.contains('Best Sellers').click()
            cy.get('#B088XH1BP7>a>span>div').click({ force: true })
            cy.get('[class="a-lineitem a-align-top"]>tbody>tr>td>span>span').eq(3).should('have.text', '₹199.00')

        });
    })
})