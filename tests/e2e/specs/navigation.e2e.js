describe('Navigation', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '/api/users', 'fixture:users')
    cy.route('GET', '/api/user/1', 'fixture:user1')
    cy.route('GET', '/api/user/2', 'fixture:user2')
    cy.route('GET', '/api/user/3', 'fixture:user3')
    cy.route('GET', '/api/colors', 'fixture:colors')

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
    cy.server()
    cy.route('GET', '/api/users', 'fixture:users')

    cy.get('[href="#/form"]')
      .click()
    cy.contains('h1', 'Form binding test')
  })
})
