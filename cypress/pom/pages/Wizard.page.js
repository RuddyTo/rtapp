import * as locators from '../locators/wizard.locators.js'

class WizardPage {
  elements = {
    wizardEmail: () => cy.get(locators.wizardEmail),
    wizardCompany: () => cy.get(locators.wizardCompany),
    wizardNext: () => cy.get(locators.wizardNext),
    wizardBack: () => cy.get(locators.wizardBack),
    wizardSubmit: () => cy.get(locators.wizardSubmit),
    wizardReview: () => cy.get(locators.wizardReview),
    wizardSuccess: () => cy.get(locators.wizardSuccess),
  }

  typeEmail(email) {
    this.elements.wizardEmail().clear().type(email)
  }

  typeCompany(company) {
    this.elements.wizardCompany().clear().type(company)
  }

  clickNext() {
    this.elements.wizardNext().click()
  }

  clickBack() {
    this.elements.wizardBack().click()
  }

  clickFinish() {
    this.elements.wizardSubmit().click()
  }

  expectWizardPageOpened() {
    cy.get('section[data-panel="wizard"].panel.active').should('be.visible')
    cy.contains('h2', 'Multi-step Wizard').should('be.visible')
    this.elements.wizardEmail().should('be.visible')
  }

  expectReviewShowsEmail(email) {
    this.elements.wizardReview().should('contain.text', email)
  }

  expectReviewShowsCompany(company) {
    this.elements.wizardReview().should('contain.text', company)
  }

  expectRegistrationComplete() {
    this.elements.wizardSuccess().should('be.visible').and('contain.text', 'Registration complete!')
  }
}

export default new WizardPage()
