
// to cheak the register user functionality

describe('verify the register login functionality',function(){

    // let url ='http://automationexercise.com'

    it('register login functionality',function(){

        cy.visit('http://automationexercise.com')
        cy.get('img[src="/static/images/home/logo.png"]').should('be.visible')
    })

    let mail =`${(Math.random())*20}nityanandbhosale2000@gmail.com`
    it.only('register login and sign in/login user',function(){
        cy.visit('http://automationexercise.com')
        cy.get('[href="/login"]').click()
        cy.get('h2').eq(3).should('be.visible')
        cy.get('input[name="name"]').type('Nityanand')
        cy.get('input[name="email"]').last().type(mail)
        cy.get('button[class="btn btn-default"]').eq(1).click()
        cy.get('#id_gender1').click()
        cy.get('input[data-qa="name"]').should('have.value','Nityanand')
        cy.get('input[data-qa="email"]').should('have.value',mail)
        cy.get('input[data-qa="password"]').type('Nityanandb@2000')
        // cy.get('#days').select('19')
        cy.get('#uniform-days').click({force: true}).wait(2000)
        cy.get('#days').find('option').each((el,index)=>{
            if(el.text()==19){
                cy.wrap(el).click({force: true})
            }
        })
        cy.get('#months').select('May')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('h2').should('be.visible')
        cy.get('#first_name').type('Nityanand')
        cy.get('#last_name').type('Bhosale')
        cy.get('#company').type('Infosiys')
        cy.get('#address1').type('Singhad road,pune.')
        cy.get('#address2').type('singhad road,pune.')
        cy.get('#country').select('India')
        cy.get('#state').type('Maharashtra')
        cy.get('#city').type('Pune')
        cy.get('#zipcode').type(413406)
        cy.get('#mobile_number').type(7522957603)
        cy.get('button[data-qa="create-account"]').click()
        cy.get('section div.row p').first().then(function(el){
            expect(el.text()).to.eqls('Congratulations! Your new account has been successfully created!')
        })   
    })
})