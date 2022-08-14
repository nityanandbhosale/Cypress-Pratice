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
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_email"]').type('Nitin@1234')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_telephone"]').type(7522957605)
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_fax"]').type('N/A')

        // adress
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_company"]').type('Minskole')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_address_1"]').type('Singhad road,Pune')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_address_2"]').type('Singhad road,Pune')
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_city"]').type('Pune')
        // cy.intercept({
        //     method:"GET",
        //     url:"https://automationteststore.com/index.php?rt=common/zone&zone_id=FALSE&country_id=99"
        // }).as('ststes')
        // cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_zone_id"]/*')
        // cy.wait("@ststes").then(function(resp){
        //     cy.log(resp)
        // })
        
        // cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_zone_id"]/*').each(function(el){
        //     if(el.text()=='Maharashtra'){
        //         cy.log(el.text())
        //         cy.wrap(el).click()
        //     }
        // })
        cy.xpath('//div[@class="input-group col-sm-4"]//input[@id="AccountFrm_postcode"]').type(413406)
        cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_country_id"]/*').each(function(el,i){
            if(el.text()=='India'){
                cy.log(el.text(),i)
                cy.xpath('//div[@class="input-group col-sm-4"]//select[@id="AccountFrm_country_id"]').select(`${i}`)
            }
        })

    })
})