describe('Form page', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '/api/users', 'fixture:users')

    cy.visit('/#/form')
  })

  it('User select is rendered', () => {
    cy.get('.user-select')
      .should('exist')
      .and('be.visible')
  })

  it.only('User select has correct data', () => {
    cy.get('.user-select option')
      .should('have.length', 3)
      .and('contain', 'Joe Dirt')
      .and('contain', 'Darth Vader')
      .and('contain', 'Eric Schmidt')
  })
})
