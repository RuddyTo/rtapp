import MenuNavigationPage from '../pom/pages/MenuNavigation.page.js'
import UploadPage from '../pom/pages/Upload.page.js'

describe('File Upload', () => {
  beforeEach(() => {
    MenuNavigationPage.visit()
    MenuNavigationPage.dismissCookieBanner()
    MenuNavigationPage.clickUploadMenu()
  })

  it('should show an error when uploading without a file', () => {
    UploadPage.expectUploadPageOpened()
    UploadPage.clickUpload()
    UploadPage.expectUploadErrorNoFile()
  })

  it('should show the file name after selecting a file and uploading', () => {
    UploadPage.expectUploadPageOpened()
    UploadPage.selectFile('cypress/fixtures/sample.txt')
    UploadPage.clickUpload()
    UploadPage.expectUploadSuccess('sample.txt')
  })
})
