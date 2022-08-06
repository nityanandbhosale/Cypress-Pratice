///<reference types="cypress" />

// test API response

describe('to verify the API response',()=>{
    it('verify the response of ApI',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function({body,status,statusText,headers,requestHeaders,duration}){
            cy.log(body)
            cy.log(status)
            cy.log(statusText) 
            cy.log(headers)
            cy.log(requestHeaders)
            cy.log(duration)

            // expect(duration).to.be.within(50,200)

            expect(body).to.have.keys(['page','per_page','total','total_pages','data','support'])
            // expect(status).to.eql(200)
            // expect(statusText).to.eq('OK')
            // expect(headers).to.have.property('content-type','application/json; charset=utf-8')

            body.data.forEach(function(element) {
                expect(element).to.have.keys(['id','first_name','last_name','email','avatar'])
                expect(element.first_name).not.to.eql(null)
                expect(element.last_name).not.to.eql(null)
                expect(element.email).not.to.eql(null)
                expect(element.id).not.to.eql(null)
                expect(element.avatar
                    ).not.to.eql(null)
            });
            
         })

       
    })

    // it.only('verify the API testcase',function(){
    //     cy.request({
    //         method:"POST",
    //         url:"https://reqres.in/api/users",
    //         body:{
    //             name:"nityanand",
    //             job:"tester"
    //         }
    //     }).then(function({status,body,statusText,headers}){
    //         // cy.log(response)
    //         // cy.log(status)
    //         // cy.log(body)
    //         // cy.log(statusText)
    //         // cy.log(headers)

    //         let userId= body.id
    //         // cy.log(myname)
    //         return userId            
    //     }).then(function(myname){
    //         let userid = myname
    //         return userid
            
    //     }).then(function(UserId){
    //         let Id = UserId
    //         cy.request({
    //             method:"GET",
    //             url:`https://reqres.in/api/users/${Id}`
    //         }).then(function(response){
    //             cy.log(response)
    //         })
            
    //     })

    // })
})