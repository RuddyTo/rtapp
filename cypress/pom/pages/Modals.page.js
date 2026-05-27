import * as locators from '../locators/modals.locators.js'

class ModalsPage {
  elements = {
    openModalButton: () => cy.get(locators.openModalButton),
    triggerConfirmButton: () => cy.get(locators.triggerConfirmButton),
    customModal: () => cy.get(locators.customModal),
    modalConfirmButton: () => cy.get(locators.modalConfirmButton),
    modalCancelButton: () => cy.get(locators.modalCancelButton),
    modalResult: () => cy.get(locators.modalResult),
    confirmResult: () => cy.get(locators.confirmResult),
  }

  clickOpenModal() {
    this.elements.openModalButton().click()
  }

  clickModalConfirm() {
    this.elements.modalConfirmButton().click()
  }

  clickModalCancel() {
    this.elements.modalCancelButton().click()
  }

  clickTriggerConfirm() {
    this.elements.triggerConfirmButton().click()
  }

  expectModalsPageOpened() {
    cy.get('section[data-panel="modals"].panel.active').should('be.visible')
    cy.contains('h2', 'Modals & Alerts').should('be.visible')
    this.elements.openModalButton().should('be.visible')
  }

  expectCustomModalVisible() {
    this.elements.customModal().should('be.visible')
    cy.contains('h3', 'Confirm action').should('be.visible')
  }

  expectModalConfirmed() {
    this.elements.modalResult().should('be.visible').and('contain.text', 'Action confirmed!')
    this.elements.modalResult().should('have.class', 'success')
  }

  expectModalCancelled() {
    this.elements.modalResult().should('be.visible').and('contain.text', 'Action cancelled.')
  }

  expectConfirmAccepted() {
    this.elements.confirmResult().should('be.visible').and('contain.text', 'You accepted.')
    this.elements.confirmResult().should('have.class', 'success')
  }
}

export default new ModalsPage()
