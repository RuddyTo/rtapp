import * as locators from '../locators/forms.locators.js'

class FormsPage {
  elements = {
    profileForm: () => cy.get(locators.profileForm),
    fullName: () => cy.get(locators.fullName),
    role: () => cy.get(locators.role),
    levelJunior: () => cy.get(locators.levelJunior),
    skillCypress: () => cy.get(locators.skillCypress),
    startDate: () => cy.get(locators.startDate),
    profileSummary: () => cy.get(locators.profileSummary),
    saveButton: () => cy.contains('form[name="profile"] button', 'Save profile'),
  }

  typeFullName(name) {
    this.elements.fullName().clear().type(name)
  }

  selectRole(value) {
    this.elements.role().select(value)
  }

  clickLevelJunior() {
    this.elements.levelJunior().check()
  }

  clickSkillCypress() {
    this.elements.skillCypress().check()
  }

  typeStartDate(date) {
    this.elements.startDate().clear().type(date)
  }

  clickSaveProfile() {
    this.elements.saveButton().click()
  }

  expectFormsPageOpened() {
    cy.get('section[data-panel="forms"].panel.active').should('be.visible')
    cy.contains('h2', 'Forms Lab').should('be.visible')
    this.elements.profileForm().should('be.visible')
  }

  expectProfileSaved(name) {
    this.elements.profileSummary().should('be.visible')
    this.elements.profileSummary().should('contain.text', 'Profile saved')
    this.elements.profileSummary().should('contain.text', name)
  }
}

export default new FormsPage()
