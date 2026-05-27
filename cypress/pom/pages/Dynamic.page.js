import * as locators from '../locators/dynamic.locators.js'

class DynamicPage {
  elements = {
    loadButton: () => cy.get(locators.loadButton),
    dynamicResult: () => cy.get(locators.dynamicResult),
    dynamicText: () => cy.get(locators.dynamicText),
  }

  clickLoadContent() {
    this.elements.loadButton().click()
  }

  expectDynamicPageOpened() {
    cy.get('section[data-panel="dynamic"].panel.active').should('be.visible')
    cy.contains('h2', 'Dynamic Content').should('be.visible')
    this.elements.loadButton().should('be.visible')
  }

  expectContentLoaded() {
    this.elements.dynamicResult().should('be.visible', { timeout: 5000 })
    cy.contains('h3', 'Content loaded!').should('be.visible')
    this.elements.dynamicText().should('be.visible')
  }
}

export default new DynamicPage()
