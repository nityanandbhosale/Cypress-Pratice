///<reference types="cypress" />
import { demo } from "./POM/demo"

let logDemo = new demo

describe('verify the login functionality',()=>{
    it('verify the valid credentials',()=>{
        logDemo.visit('https://www.demoblaze.com/#')
        logDemo.click()
        logDemo.username('abcd2365')
        logDemo.password('asdc1562')
        logDemo.logCl()
    })

    
})