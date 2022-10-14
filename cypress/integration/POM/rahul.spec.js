///<reference types="cypress" />

export class shopping{

    visit(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    }
    
    searchproduct(fruit){
        cy.get('.search-keyword').type(fruit)
        cy.wait(4000)
        
    }

    verify(value){
        cy.get('[class="product-name"]').each(function(el,index){
            cy.log(el.text())
            if(el.text()==value){
                 cy.get('[class="product-action"] button').click()
                // cy.contains('ADD TO CART').eq(index).click()
            }
            cy.contains('ADD TO CART').click()
        })
    //     cy.get('[class="product"]').eq(1).find('p').should('have.text',72)
    //     cy.get('[class="product"]').eq(1).find('input').should('have.value',1)
    //     cy.get('[class="product"]').eq(1).find('button').should('have.text','ADD TO CART').click()
    }

    checkCart(){
        cy.get('[alt="Cart"]').click({force:true}).should('be.visible')
        // cy.get('[class="action-block"]').first().click({force:true})
        
        cy.get('[class="action-block"]').first().contains('PROCEED TO CHECKOUT').click({force:true})
    }

    checkCartProduct(){
        // cy.get('.product-name').last().should('have.text','Apple - 1 Kg')
        // cy.get('tbody>tr>td').eq(2).should('have.text',1)
        // cy.get('.amount').last().should('have.text',72)
        // cy.wait(6000)
        cy.contains('Place Order').click()
        
       
    }

    placeOrder(){
        cy.get('.products div button').last().click()
    }
}

