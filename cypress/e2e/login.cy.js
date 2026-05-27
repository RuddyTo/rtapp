import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import LoginPage from '../pom/pages/Login.page.js'

describe('Login', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickLoginMenu()
  })

  it('should display the login form', () => {
    LoginPage.expectLoginPageOpened()
  })

  it('should sign in with valid credentials', () => {
    cy.fixture('loginData').then((data) => {
      LoginPage.typeEmail(data.validEmail)
      LoginPage.typePassword(data.validPassword)
      LoginPage.clickSignIn()
      LoginPage.expectLoginSuccess()
    })
  })

  it('should show an error with invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      LoginPage.typeEmail(data.invalidEmail)
      LoginPage.typePassword(data.invalidPassword)
      LoginPage.clickSignIn()
      LoginPage.expectLoginError()
    })
  })
})
