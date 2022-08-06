///<reference types="cypress" />

// TO cheak the goresst api

describe('To cheak the gorest api', () => {

    let token = "Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
    it('TS01 verify the gorest GET API', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            }
        }).then(function ({ status, body }) {
            // cy.log(response)
            expect(status).to.eqls(200)
            expect(body.length).to.eql(10)

            // body.forEach(function (element) {
            //     expect(element).to.have.keys(['id', 'email', 'name', 'gender', 'status'])

            // });
        })
    })

    // creat user
    it.only('verify the post API', () => {

        let payload = {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `${Math.random() * 10}tenali.ramakrishna@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: payload

        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eql(201)
            expect(response.duration).to.be.within(100, 300)
            expect(response.body).to.have.keys(['id', 'email', 'name', 'status', 'gender'])

            // assert the body property
            expect(response.body.id).not.eql(null)
            expect(response.body.name).to.eql(payload.name)
            expect(response.body.email).to.eql(payload.email)
            expect(response.body.status).to.eql(payload.status)
            expect(response.body.gender).to.eql(payload.gender)

            let data = response.body
            for (let keys in data) {
                cy.log(keys, data[keys])
            }
        })
    })

    // Update the user
    it('update the user bu the PUT API', () => {

        let payload = {
            "name": "Allasani Peddana",
            "email": `${Math.random() * 20}allasani.peddana@1550ce.com`,
            "status": "active",
            "gender": "male"
        }
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/321",
            headers: {
                Authorization: token
            },
            body: payload

        }).then(function (response) {
            cy.log(response)
        })
    })

    it('delete the APi', function () {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/321",
            headers: {
                Authorization: token
            }
        }).then(function (response) {
            cy.log(response)
        })
    })

    // subsiquent request 

    it('verify the subsiquient request', () => {
        let payload = {
            "name": "Fr. Bharat Singh",
            "email": `${Math.random() * 20}singh_bharat_fr@mckenzie.net`,
            "gender": "male",
            "status": "inactive"
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: payload

        }).then(function ({ status, body, headers }) {
            // cy.log(response)

            expect(status).to.eqls(201)
            expect(body).to.have.keys(['id', 'email', 'name', 'gender', 'status'])

            // assert the body
            expect(body.id).not.be.eqls(null)
            expect(body.name).to.eqls(payload.name)
            expect(body.email).to.eqls(payload.email)
            expect(body.gender).to.eqls(payload.gender)
            expect(body.status).to.eqls(payload.status)

            return body.id
        }).then(function (id) {

            let payload = {
                "name": "sneha joshi",
                "email": `${Math.random() * 20}joshisneha@1950gmail.com`,
                "gender": "female",
                "status": "active"
            }
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: token
                },
                body: payload
            }).then(function ({ status, body }) {
                expect(status).to.eqls(200)
                expect(body).to.have.keys(['id', 'email', 'name', 'gender', 'status'])
                
                // assert the body
                expect(body.id).not.be.eqls(null)
                expect(body.name).to.eqls(payload.name)
                expect(body.email).to.eqls(payload.email)
                expect(body.gender).to.eqls(payload.gender)
                expect(body.status).to.eqls(payload.status)

                return body.id
            }).then(function(id){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization:token
                    }

                }).then(function({status}){
                    expect(status).to.eqls(204)
                })
            })
        })
    })

})