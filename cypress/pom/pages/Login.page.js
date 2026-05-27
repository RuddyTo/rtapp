import * as locators from '../locators/login.locators.js'

/**
 * Login panel actions: one interaction per method.
 * Assertions: `expect*` may combine multiple checks.
 */
class LoginPage {
  elements = {
    loginForm: () => cy.get(locators.loginForm),
    email: () => cy.get(locators.email),
    password: () => cy.get(locators.password),
    loginMessage: () => cy.get(locators.loginMessage),
    submitButton: () => cy.contains('form[name="login"] button', 'Sign in'),
  }

  typeEmail(email) {
    this.elements.email().clear().type(email)
  }

  typePassword(password) {
    this.elements.password().clear().type(password)
  }

  clickSignIn() {
    this.elements.submitButton().click()
  }

  expectLoginPageOpened() {
    cy.get('section[data-panel="login"].panel.active').should('be.visible')
    cy.contains('h2', 'Login').should('be.visible')
    this.elements.loginForm().should('be.visible')
  }

  expectLoginSuccess() {
    this.elements.loginMessage().should('be.visible').and('contain.text', 'Login successful')
    this.elements.loginMessage().should('have.class', 'success')
  }

  expectLoginError() {
    this.elements.loginMessage().should('be.visible').and('contain.text', 'Invalid email or password')
    this.elements.loginMessage().should('have.class', 'error')
  }
}

export default new LoginPage()
