import * as locators from '../locators/table.locators.js'

class TablePage {
  elements = {
    usersTable: () => cy.get(locators.usersTable),
    sortNameButton: () => cy.get(locators.sortNameButton),
    firstRowFirstCell: () => cy.get(locators.firstRowFirstCell),
  }

  clickSortByName() {
    this.elements.sortNameButton().click()
  }

  expectTablePageOpened() {
    cy.get('section[data-panel="table"].panel.active').should('be.visible')
    cy.contains('h2', 'Sortable Table').should('be.visible')
    this.elements.usersTable().should('be.visible')
  }

  expectFirstRowName(name) {
    this.elements.firstRowFirstCell().should('have.text', name)
  }
}

export default new TablePage()
