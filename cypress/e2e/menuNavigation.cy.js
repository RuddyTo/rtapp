import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
// tiene que ser paso por paso y entenderse como un test. 
describe('Menu navigation', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
  })
it('should display Nav Menu', () => {
  MenuNavigationPage.visit()
  MenuNavigationPage.clickHomeMenu()
  MenuNavigationPage.expectHomePageOpened()
  MenuNavigationPage.clickLoginMenu()
  MenuNavigationPage.clickFormsMenu()
  MenuNavigationPage.clickDynamicMenu()
  MenuNavigationPage.clickModalsMenu()
  MenuNavigationPage.clickTableMenu()
  MenuNavigationPage.clickUploadMenu()
  MenuNavigationPage.clickWizardMenu()
  MenuNavigationPage.clickChallengesMenu()

})

})
