import * as locators from '../locators/menuNavigation.locators.js'

const MARKERS = {
  homeMarker: locators.homeMarker,
  loginMarker: locators.loginMarker,
  formsMarker: locators.formsMarker,
  dynamicMarker: locators.dynamicMarker,
  modalsMarker: locators.modalsMarker,
  tableMarker: locators.tableMarker,
  uploadMarker: locators.uploadMarker,
  wizardMarker: locators.wizardMarker,
  challengesMarker: locators.challengesMarker,
}

class MenuNavigationPage {
  elements = {
    sidebar: () => cy.get(locators.sidebar),
    navLink: (section) => cy.get(locators.navLink(section)),
    activePanel: (section) => cy.get(locators.activePanel(section)),
    pageMarker: (markerKey) => cy.get(MARKERS[markerKey]),
    homeHeading: () => cy.get(locators.homeHeading),
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

  goToSection(section) {
    this.elements.navLink(section).click()
  }

  expectSectionActive(section) {
    this.elements.activePanel(section).should('be.visible')
    this.elements.navLink(section).should('have.class', 'active')
  }

  expectHomePageOpened() {
    this.expectSectionActive('home')
    this.elements.homeHeading().should('be.visible').and('have.text', 'Welcome to the sandbox')
    this.elements.pageMarker('homeMarker').should('be.visible')
  }

  expectPageOpened({ name, heading, markerKey }) {
    this.expectSectionActive(name)
    cy.contains('h2', heading).should('be.visible')
    this.elements.pageMarker(markerKey).should('be.visible')
  }
}

export default new MenuNavigationPage()
