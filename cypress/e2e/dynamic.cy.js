import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import DynamicPage from '../pom/pages/Dynamic.page.js'

describe('Dynamic Content', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickDynamicMenu()
  })

  it('should load content after clicking Load content', () => {
    DynamicPage.expectDynamicPageOpened()
    DynamicPage.clickLoadContent()
    DynamicPage.expectContentLoaded()
  })
})
