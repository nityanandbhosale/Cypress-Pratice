///<reference types="cypress" />

// to creat the token and check the payapl API

describe('verify the Paypal API and create the token',function(){

    let token ="Bearer "
    it('to creat the token for API',function(){
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                Authorization :"Basic QVR4TFhXVTljSmIzbWk4M284a3F6bTlLb0EzUEV2ZHVSb01yN2hzT3dRMW5Kdnh3bGRVWUpoNjFaM2s5TlItcTloY1JkNUYxckVvQ1Zad1Y6RUxRMy12eEVDdGpEeEo4R19TLUl0cUhveDFwUDUzTGN2NFBnemFKd2ptNTJYZy1hSWZJb25jVUxmZ3UtTFpQaXBaTXNkdUhJb09QMTJSOEg="
            },
            body:{
                grant_type:'client_credentials'
            },
            form:true
        }).then(function({status,body}){
            // cy.log(response)
        })
    })
    
})