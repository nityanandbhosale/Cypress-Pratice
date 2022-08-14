///<reference types="cypress" />

describe(' vrify the amazon site by using the v-path',function(){
    it('verify the x-path by amazon site',function(){
        cy.visit('https://www.amazon.in/')
        cy.xpath('//input[@id="twotabsearchtextbox"]').type('samsung')
        // cy.xpath('//div[@class="autocomplete-results-container"]//div//div//div//span[text()="s22 ultra"]').click()
        cy.xpath('//div[@class="autocomplete-results-container"]//div//div//div').each(el=>{
            if(el.text()=='samsung s22'){
                cy.log(el.text())
                cy.wrap(el).click({force:true})
            }
        })
    })
})