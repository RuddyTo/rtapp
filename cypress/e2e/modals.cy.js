import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import ModalsPage from '../pom/pages/Modals.page.js'

describe('Modals & Alerts', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickModalsMenu()
  })

  it('should confirm the custom modal', () => {
    ModalsPage.expectModalsPageOpened()
    ModalsPage.clickOpenModal()
    ModalsPage.expectCustomModalVisible()
    ModalsPage.clickModalConfirm()
    ModalsPage.expectModalConfirmed()
  })

  it('should cancel the custom modal', () => {
    ModalsPage.expectModalsPageOpened()
    ModalsPage.clickOpenModal()
    ModalsPage.expectCustomModalVisible()
    ModalsPage.clickModalCancel()
    ModalsPage.expectModalCancelled()
  })

  it('should accept the native confirm dialog', () => {
    ModalsPage.expectModalsPageOpened()
    cy.on('window:confirm', () => true)
    ModalsPage.clickTriggerConfirm()
    ModalsPage.expectConfirmAccepted()
  })
})
