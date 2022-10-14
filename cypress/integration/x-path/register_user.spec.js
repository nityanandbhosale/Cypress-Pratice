///<reference types="cypress" />

describe('verify the register functionality',function(){
    it('Tc01 verify the register process',function(){
        cy.visit('https://automationteststore.com/')
        cy.xpath('//ul[@id="customer_menu_top"] //li//a[text()="Login or register"]').click()
        cy.xpath('//h1').should('contain',' Account Login')
        cy.xpath('//div[@class="form-group mt20"]//label//input').check()
        cy.xpath('//fieldset//button[@title="Continue"]').click()

        //Fill the information
        cy.xpath('//h1').should('contain',' Create Account')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_firstname"]').type('Nityanand')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@name="lastname"]').type('Bhosale')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_email"]').type(`nitin${Math.random() * 20}@1234gmail.com`)
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_telephone"]').type(7522957605)
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_fax"]').type('N/A')

        // adress
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_company"]').type('Minskole')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_address_1"]').type('Singhad road,Pune')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_address_2"]').type('Singhad road,Pune')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_city"]').type('Pune')
        cy.intercept({
            method:"GET",
            url:"https://automationteststore.com/index.php?rt=common/zone&zone_id=FALSE&country_id=99"
        }).as('ststes')
        
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_postcode"]').type(413406)
        cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_country_id"]/*').each(function(el,i){
            if(el.text()=='India'){
                cy.log(el.text(),i)
                cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_country_id"]').select(`${i}`)  //dynamic Drop Down 
            }
        })
        cy.wait("@ststes").then(function(resp){     //dynamic wait--exp;icite
            cy.log(resp)
         })
        cy.xpath('//select[@class="form-control "]').first().select('1493')
        cy.xpath('//input[@id="AccountFrm_loginname"]').type(`Nityanand${Math.random()*10}`)
        cy.xpath('//input[@id="AccountFrm_password"]').type('Nityanand@5')
        cy.xpath('//input[@id="AccountFrm_confirm"]').type('Nityanand@5')
        cy.xpath('//input[@id="AccountFrm_newsletter1"]').check()
        cy.xpath('//input[@id="AccountFrm_agree"]').click()
        cy.xpath('//button[@class="btn btn-orange pull-right lock-on-click"]').click()
        cy.xpath('//span[@class="maintext"]').should('have.text',' Your Account Has Been Created!')

    })
})