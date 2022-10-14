///<reference types="cypress" />

import { shopping } from "./POM/rahul.spec";
const shopy2 = new shopping

describe("",function(){
    before(function(){
        shopy2.visit()
    })

    it("",function(){
        shopy2.searchproduct("Gr")
    })

    it("",function(){
        shopy2.verify("Grapes")
    })

    it("",function(){
        shopy2.checkCart()
    })

    it("",function(){
        shopy2.checkCartProduct()
    })
})