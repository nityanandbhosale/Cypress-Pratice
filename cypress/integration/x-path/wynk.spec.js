///<reference types="cypress" />

describe('check the wynk music functionality',function(){
    it('verfy the wynk',function(){
        cy.visit('https://wynk.in/music')
        cy.get('input[type="search"]').type("kesar")
        cy.get('[class="flex justify-between items-center"]').eq(2).click()
    })

    //  it.only('verfy song list',function(){
    //     cy.visit('https://wynk.in/music')
    //     cy.get('[class="truncate text-wynk-static-black dark:text-wynk-dark-text-secondary text-xs text-left"]').each(function(el,index){
    //         let song = el.text()
    //         cy.log(song)
    //         if(song =='Kesariya (From "Brahmastra")'){
    //             cy.wrap(el).click({force:true})
    //         }
    //     })
    // })
})