///<reference types="cypress" />

// here we verify the end to end order

describe('verify the order from add to payment',()=>{
    it('it verify the complete order',()=>{
        cy.visit('http://automationexercise.com')
        cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('div a[data-product-id="1"]').eq(1).click({force:true})
        cy.get('[class="btn btn-success close-modal btn-block"]').click()
        cy.get('div a[data-product-id="2"]').eq(1).click({force:true})
        cy.get('div [href="/view_cart"]').eq(1).click()

        cy.get('[src="get_product_picture/1"]').should('be.visible')
        cy.get('td p').eq(1).should('be.visible').should('have.text','Rs. 500')
        cy.get('td button').eq(0).should('be.visible').should('have.text',1)
        cy.get('td [class="cart_total_price"]').eq(0).should('be.visible').should('have.text','Rs. 500')

        cy.get('h4 a').eq(1).should('be.visible').should('have.text','Men Tshirt')
        cy.get('td p').eq(4).should('be.visible').should('have.text','Rs. 400')
        cy.get('td [class="disabled"]').eq(1).should('be.visible').should('have.text',1)
        cy.get('td [class="cart_total_price"]').should('be.visible').eq(1).should('have.text','Rs. 400')

        cy.get('[href="/view_cart"]').eq(0).click()
        cy.get('[class="active"]').should('have.text','Shopping Cart')
        cy.get('[class="col-sm-6"]').find('a').should('have.text','Proceed To Checkout').click()
        cy.get('p [href="/login"]').click()

        // now login
        cy.get('[data-qa="login-email"]').type('nityanandbhosale2000@gmail.com')
        cy.get('[data-qa="login-password"]').type('Nityanandb@2000')
        cy.get('[data-qa="login-button"]').click()
        cy.get('a').find('b').should('have.text','Nityanand')
        cy.get('li [href="/view_cart"]').click()

        // payment 
        cy.get('[class="col-sm-6"]').find('a').click()
        cy.get('div [class="heading"]').first().should('be.visible')
        cy.get('div [class="heading"]').last().should('be.visible')
        cy.get('textarea.form-control').type('I enjoyed your site and make some shopping')
        cy.get('[href="/payment"]').click()

        //card details
        cy.get('input[name="name_on_card"]').type('Nityanand Bhosale')
        cy.get('input[name="card_number"]').type(123045607890)
        cy.get('input[name="cvc"]').type(157)
        cy.get('input[name="expiry_month"]').type(6)
        cy.get('input[name="expiry_year"]').type(2027)

        //conform payment
        cy.get('button[id="submit"]').click()
        cy.get('div p').eq(0).should('have.text','Congratulations! Your order has been confirmed!')
        // cy.get('[class="title text-center"]').should('have.text','')
        // cy.get('#address_delivery').find('.address_firstname address_lastname').first().should('have.text','Mr. nityanand bhosale')
        // cy.get('[class="address_firstname address_lastname"]').first().should('have.text','Mr. nityanand bhosale')


    
    })
})