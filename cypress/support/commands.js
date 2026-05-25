// Custom commands: https://on.cypress.io/custom-commands

/**
 * Dismisses the cookie consent banner on QA Playground.
 * The app sets hidden on #cookie-banner (element stays in DOM).
 */
Cypress.Commands.add('dismissCookieBannerIfPresent', () => {
  cy.get('#cookie-banner', { timeout: 10000 }).should('be.visible')

  cy.get('#cookie-accept').should('be.visible').click()

  cy.get('#cookie-banner').should('not.be.visible')
})
