import * as locators from '../locators/menuNavigation.locators.js'

/**
 * Menu navigation page object.
 *
 * Action methods (`visit`, `click*`, `dismissCookieBanner`): one user interaction per method.
 * Assertion methods (`expect*`): may include multiple checks in one method.
 */
class MenuNavigationPage {
  elements = {
    navLink: (section) => cy.get(locators.navLink(section)),
    activePanel: (section) => cy.get(locators.activePanel(section)),
    homeHeading: () => cy.get(locators.homeHeading),
    homeMarker: () => cy.get(locators.homeMarker),
    homeMenu: () => cy.get(locators.homeMenu),
    loginMenu: () => cy.get(locators.loginMenu),
    formsMenu: () => cy.get(locators.formsMenu),
    dynamicMenu: () => cy.get(locators.dynamicMenu),
    modalsMenu: () => cy.get(locators.modalsMenu),
    tableMenu: () => cy.get(locators.tableMenu),
    uploadMenu: () => cy.get(locators.uploadMenu),
    wizardMenu: () => cy.get(locators.wizardMenu),
    challengesMenu: () => cy.get(locators.challengesMenu)
  }

  visit() {
    cy.visit('/#home')
  }

  clickHomeMenu() {
    this.elements.homeMenu().click()
  }

  clickLoginMenu() {
    this.elements.loginMenu().click()
  }

  clickFormsMenu() {
    this.elements.formsMenu().click()
  }

  clickDynamicMenu() {
    this.elements.dynamicMenu().click()
  }

  clickModalsMenu() {
    this.elements.modalsMenu().click()
  }

  clickTableMenu() {
    this.elements.tableMenu().click()
  }

  clickUploadMenu() {
    this.elements.uploadMenu().click()
  }

  clickWizardMenu() {
    this.elements.wizardMenu().click()
  }

  clickChallengesMenu() {
    this.elements.challengesMenu().click()
  }

  dismissCookieBanner() {
    cy.dismissCookieBannerIfPresent()
  }

  expectSectionActive(section) {
    this.elements.activePanel(section).should('be.visible')
    this.elements.navLink(section).should('have.class', 'active')
  }

  expectHomePageOpened() {
    this.expectSectionActive('home')
    this.elements.homeHeading().should('be.visible').and('have.text', 'Welcome to the sandbox')
    this.elements.homeMarker().should('be.visible')
  }
}

export default new MenuNavigationPage()
