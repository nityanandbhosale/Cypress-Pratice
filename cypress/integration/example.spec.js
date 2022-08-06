


describe('verify the table data of the element', function () {

    it('vrify the table data', function () {

        cy.visit('https://omayo.blogspot.com/');
        //         cy.get('#table1 tbody tr').eq(1).find('td').first().should('have.text','Manish')
        //         let arr = ["Name","Age","Place"]
        //   cy.get('#table1 thead tr th').each((el,i)=>{
        //     expect(el.text()).to.eq(arr[i])
        // })
        cy.get('#table1 tbody tr').find('td').each(function(el,index){
            if (el.text() == "Manish") {
                cy.get('#table1 tbody tr')
                .eq(index).find('td').last().should('have.text', 'Pune')
                //cy.wrap(el).eq(index).find('td').last().should('have.text', 'Pune')
            }
        })
    })

})

