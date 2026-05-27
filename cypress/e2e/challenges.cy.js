import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import ChallengesPage from '../pom/pages/Challenges.page.js'

describe('Locator Challenges', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickChallengesMenu()
  })

  it('should update status when the challenge button is clicked', () => {
    ChallengesPage.expectChallengesPageOpened()
    ChallengesPage.expectChallengeWaiting()
    ChallengesPage.clickChallengeButton()
    ChallengesPage.expectChallengeClicked()
  })

  it('should still work after regenerating dynamic ids', () => {
    ChallengesPage.expectChallengesPageOpened()
    ChallengesPage.clickRegenerateIds()
    ChallengesPage.expectChallengeWaiting()
    ChallengesPage.clickChallengeButton()
    ChallengesPage.expectChallengeClicked()
  })
})
