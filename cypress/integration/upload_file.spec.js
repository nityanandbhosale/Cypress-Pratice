// upload file 
// ******** sites ************
// http://automationpractice.com/index.php?controller=contact%27
// https://css-tricks.com/examples/DragAndDropFileUploading/
// https://davidwalsh.name/demo/multiple-file-upload.php
//https://davidwalsh.name/demo/multiple-file-upload.php

describe('verift the upload file functionality',()=>{


    let file = 'javascript.jpg'
    let file2 = 'interv.jpg'
    let file3 =  'Git.pdf' 
    it('TS01 upload the file',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading')
        cy.get('input[id="file"]').attachFile(file)
        cy.get('.box__success').should('contain','Done! ')
        cy.get('div .box__restart').first().attachFile(file2)
        cy.get('.box__success').should('contain','Done! ')

    })

    it('TS02 upload file',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(file)
        cy.get('#fileList').children().should('have.text','javascript.jpg')

        cy.get('').attachFile(file2)
        cy.get('').children().should('have.text','interv.jpg')
    })

    it('TS03 verf#filesToUploady the multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([file,file2,file3])
        cy.get('#fileList').children().should('have.length',3)
    })

    it('TS04 verify the file upload',()=>{
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(file2)
        cy.get('#submit-button').click()
        cy.url().should('contain','interv.jpg')
    })

    it.only('TS05 verify the file upload',()=>{
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile')
        .attachFile({filePath:file2, fileName:'interview.jpg'})
        cy.get('#submit-button').click()
        cy.url().should('contain','interview.jpg')
    })
})



