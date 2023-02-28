export class demo{
    element={
        log : '#login2',
        input:'#loginusername',
        passw:'#loginpassword',
        logClick:'button[class="btn btn-primary'
    }

    visit(url){
        cy.visit(url)
    }

    click(){
        cy.get(this.element.log).click()
    }

    username(usName){
        cy.get(this.element.input).type(usName)
    }

    password(pwd){
        cy.get(this.element.passw).type(pwd)
    }

    logCl(){
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
        })
        cy.get('button[type="button"]').contains('Log in').click('')
        
        // cy.contains('Log in').click()
    }

    cy.get('.card-title').each(function(el,index){
        cy.wrap(el).click()
        cy.on('window:confirm', function (str) {
            expect(str).to.eql('I am a JS Confirm')
        })
        cy.get('btn btn-success btn-lg').click()
        cy.on('window:confirm', function () {
            return false
        })
    })
}