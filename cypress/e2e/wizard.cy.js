import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import WizardPage from '../pom/pages/Wizard.page.js'

describe('Multi-step Wizard', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickWizardMenu()
  })

  it('should complete the wizard and show success', () => {
    WizardPage.expectWizardPageOpened()
    cy.fixture('wizardData').then((data) => {
      WizardPage.typeEmail(data.email)
      WizardPage.clickNext()
      WizardPage.typeCompany(data.company)
      WizardPage.clickNext()
      WizardPage.expectReviewShowsEmail(data.email)
      WizardPage.expectReviewShowsCompany(data.company)
      WizardPage.clickFinish()
      WizardPage.expectRegistrationComplete()
    })
  })
})
