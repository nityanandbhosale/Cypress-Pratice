///<reference types="cypress" />

// here we contact and send the message

describe('verify the message functionality',()=>{
    it('verify the message functionality',()=>{

        const file ='uoload_file.pdf'

        cy.visit('http://automationexercise.com')
        cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('ul li a[href="/contact_us"]').click()
        cy.get('div h2').eq(1).should('be.visible')
        cy.get('[data-qa="name"]').type('Nityanand')
        cy.get('[data-qa="email"]').type('nityanandbhosale2000@gmail.com')
        cy.get('[data-qa="subject"]').type('To know more info about your site')
        cy.get('[data-qa="message"]').type('this is good shopping site but its take little bit time to load')
        cy.get('div input[name="upload_file"]').attachFile(file)
        cy.get('div input[name="submit"]').click()
        cy.get('[style="display: block;"]').first().should('have.text','Success! Your details have been submitted successfully.')
        cy.get('[href="/"]').eq(2).click()
    })

    // visit to test cases
    it.only('verify the test cases',()=>{
        cy.visit('http://automationexercise.com')
        cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('li a[href="/test_cases"]').click({ multiple: true })
        cy.get('h2 b').should('be.visible')
    })
})