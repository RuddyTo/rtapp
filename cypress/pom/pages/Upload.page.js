import * as locators from '../locators/upload.locators.js'

class UploadPage {
  elements = {
    fileInput: () => cy.get(locators.fileInput),
    uploadResult: () => cy.get(locators.uploadResult),
    uploadButton: () => cy.contains('form[name="upload"] button', 'Upload'),
  }

  selectFile(fixturePath) {
    this.elements.fileInput().selectFile(fixturePath, { force: true })
  }

  clickUpload() {
    this.elements.uploadButton().click()
  }

  expectUploadPageOpened() {
    cy.get('section[data-panel="upload"].panel.active').should('be.visible')
    cy.contains('h2', 'File Upload').should('be.visible')
    this.elements.fileInput().should('exist')
  }

  expectUploadSuccess(fileName) {
    this.elements.uploadResult().should('be.visible')
    this.elements.uploadResult().should('contain.text', `Uploaded: ${fileName}`)
    this.elements.uploadResult().should('have.class', 'success')
  }

  expectUploadErrorNoFile() {
    this.elements.uploadResult().should('be.visible')
    this.elements.uploadResult().should('contain.text', 'Please choose a file first.')
    this.elements.uploadResult().should('have.class', 'error')
  }
}

export default new UploadPage()
