///<reference types="cypress" />

describe('select the date',function(){
    it('check the calender',function(){

        let date = new Date()
        

        // it gives the present date,month and year
        // cy.log(date.getDate())
        // cy.log(date.getMonth())
        // cy.log(date.getFullYear())

        // now we can select the future date by using calender
        // set the future date 
        // 19 june 2023

        let date2 = new Date()
        date2.setDate(date2.getDate()+323)
        let setyear = date2.getFullYear()
        let setdate = date2.getDate()
        let setmonth = date2.toLocaleString('default',{month:'long'})
        let numMonth = date2.toLocaleString('default',{month:'short'})
        // cy.log(setdate)
        // cy.log(setmonth)
        // cy.log(numMonth)
        // cy.log(setyear)
        
    
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function setyearMonth(){
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(setyear)){
                    cy.get('.next').last().click({force:true})
                    setyearMonth()
                }
               
            })

            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(setmonth)){
                    cy.get('.next').last().click({force:true})
                    setyearMonth()
                }
            })
        }

        function pickdate(){
            cy.contains(setdate).click()
        }
        setyearMonth()
        pickdate()
        
     })
})
