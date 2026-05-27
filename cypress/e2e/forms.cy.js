import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import FormsPage from '../pom/pages/Forms.page.js'

describe('Forms Lab', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickFormsMenu()
  })

  it('should save a profile with valid data', () => {
    FormsPage.expectFormsPageOpened()
    cy.fixture('formsData').then((data) => {
      FormsPage.typeFullName(data.fullName)
      FormsPage.selectRole(data.role)
      FormsPage.clickLevelJunior()
      FormsPage.clickSkillCypress()
      FormsPage.typeStartDate(data.startDate)
      FormsPage.clickSaveProfile()
      FormsPage.expectProfileSaved(data.fullName)
    })
  })
})
