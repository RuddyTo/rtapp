import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import TablePage from '../pom/pages/Table.page.js'

describe('Sortable Table', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickTableMenu()
  })

  it('should sort rows by name ascending', () => {
    TablePage.expectTablePageOpened()
    TablePage.clickSortByName()
    TablePage.expectFirstRowName('Alice')
  })
})
