describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Visits the app root url', () => {
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })

  it('Visits the about page', () => {
    cy.get('[href="#/about"]')
      .click()
    cy.contains('h1', 'This is an about page')
  })

  it('Visits the form page', () => {
    cy.get('[href="#/form"]')
      .click()
    cy.contains('h1', 'Form binding test')
  })
})
