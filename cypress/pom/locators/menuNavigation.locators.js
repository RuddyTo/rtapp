/**
 * Menu navigation locators — https://ruddyto.github.io/rtapp/#home
 *
 * Locator strategy: data-section nav links + data-panel sections + home panel markers
 */

export const navLink = (section) =>
  `nav.sidebar[aria-label="Sections"] a.nav-link[data-section="${section}"]`

export const activePanel = (section) => `section[data-panel="${section}"].panel.active`

export const homeMenu = '[data-section="home"]'
export const loginMenu = '[data-section="login"]'
export const formsMenu = '[data-section="forms"]'
export const dynamicMenu = '[data-section="dynamic"]'
export const modalsMenu = '[data-section="modals"]'
export const tableMenu = '[data-section="table"]'
export const uploadMenu = '[data-section="upload"]'
export const wizardMenu = '[data-section="wizard"]'
export const challengesMenu = '[data-section="challenges"]'

export const homeMarker = 'ul.feature-list'
export const homeHeading = 'section[data-panel="home"] h2'
