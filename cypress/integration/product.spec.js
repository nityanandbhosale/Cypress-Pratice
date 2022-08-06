///<reference types="cypress" />

describe('verify the product functionality',()=>{

    beforeEach(function(){
        cy.visit('http://automationexercise.com')
        cy.get('ul li a[href="/"]').should('be.visible')
    })

    // test case 8
    it('verify the product functionality',()=>{
        // cy.visit('http://automationexercise.com')
        // cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('[href="/products"]').click()
        cy.get('[class="title text-center"]').should('be.visible')
        cy.get('[href="/product_details/1"]').click()
        cy.get('div h2').eq(2).should('have.text','Blue Top')
        cy.get('div p').eq(2).should('have.text','Category: Women > Tops')
        cy.get('span span').should('be.visible')
        cy.get('p b').eq(0).should('have.text','Availability:')
        cy.get('p b').eq(1).should('be.visible')
        cy.get('p b').eq(2).should('be.visible')
     
    })

    // search the product
    // test case 9
    it('verify the search functionality',()=>{
        // cy.visit('http://automationexercise.com')
        // cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('[href="/products"]').click()
        cy.get('[class="title text-center"]').should('be.visible')
        cy.get('#search_product').type('Shirt').click()
        cy.get('[class="title text-center"]').should('be.visible')
        cy.get('div .col-sm-4').should('have.length',35)
    })

    // send email
    // test case 10
    it('verify the subscription process',()=>{
        // cy.visit('http://automationexercise.com')
        // cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('#footer')
        cy.get('.single-widget').find('h2').should('have.text','Subscription')
        cy.get('input[type="email"]').type('nityanandbbhosale2000@gmail.com')
        cy.get('button i').click().wait(2000)
        cy.get('#success-subscribe').find('div').should('have.text','You have been successfully subscribed!')
        
    })

        // test case 11

    it('verify the cart process',()=>{
        // cy.visit('http://automationexercise.com')
        // cy.get('ul li a[href="/"]').should('be.visible')
        cy.get('li a[href="/view_cart"]').click({ multiple: true })
        cy.get('#footer')
        cy.get('.single-widget').find('h2').should('have.text','Subscription')
        cy.get('#susbscribe_email').type('nityanandbhosale2000@gmail.com')
        cy.get('button i').click()
        cy.get('#success-subscribe').find('div').should('have.text','You have been successfully subscribed!')

    })


        // test case 12
    it('add the product to cart',()=>{
        cy.get('ul a[href="/products"]').click()
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

    })

    // test case 13
    // it.only('add multiple product in the cart',()=>{
    //     cy.get('ul li [href="/product_details/31"]').click()
    //     cy.get('[class="col-sm-7"]').should('be.visible')
    //     cy.get('input[value="1"]').find('[type="hidden"]').should('have.value',4)
    //     // cy.get('[id="product_id"]').should('be.visible').each(function(el){
    //     //     if(el.text()==4){
    //     //         cy.wrap(el).click()
    //     //     }
    //     // })
    // })

    it('')
})