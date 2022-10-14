///<reference types="cypress" />

import {shopping} from "./POM/rahul.spec"
const shopy = new shopping()



describe('To check the process of shopping',function(){
    
    before(()=>{
        shopy.visit()
    })

    it('TC 01 search the shopping product in search bar',function(){
        shopy.searchproduct("Apple")
        
    })

    it('TC02 vaerfy the shopy.verify()product details',function(){
        shopy.verify("Apple")
        
    })

    it('TC 03 checkout for proceed',function(){
        shopy.checkCart()
    })

    it('TC 04 verify the cart product',function(){
        shopy.checkCartProduct()
    })

    it('place the product order',function(){
        shopy.placeOrder()
    })
})