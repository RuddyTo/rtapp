import * as locators from '../locators/challenges.locators.js'

class ChallengesPage {
  elements = {
    regenerateButton: () => cy.get(locators.regenerateButton),
    challengeButton: () => cy.get(locators.challengeButton),
    challengeLabel: () => cy.get(locators.challengeLabel),
  }

  clickRegenerateIds() {
    this.elements.regenerateButton().click()
  }

  clickChallengeButton() {
    this.elements.challengeButton().click()
  }

  expectChallengesPageOpened() {
    cy.get('section[data-panel="challenges"].panel.active').should('be.visible')
    cy.contains('h2', 'Locator Challenges').should('be.visible')
    this.elements.challengeButton().should('be.visible')
  }

  expectChallengeWaiting() {
    this.elements.challengeLabel().should('contain.text', 'Status: waiting')
  }

  expectChallengeClicked() {
    this.elements.challengeLabel().should('contain.text', 'Status: clicked!')
  }
}

export default new ChallengesPage()
