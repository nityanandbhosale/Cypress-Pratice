///<reference types="cypress" />

import data from "../fixtures/multiple_username.json"

describe(' vrify the login functionality by importing the data',()=>{


    beforeEach(()=>{

        this.info = data
    })

    it('verify the login functionality',()=>{

        cy.log(this.info.username)
    })
})