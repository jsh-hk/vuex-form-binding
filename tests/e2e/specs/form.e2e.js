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

  it('User select has correct data', () => {
    cy.get('.user-select option')
      .should('have.length', 3)
      .and('contain', 'Joe Dirt')
      .and('contain', 'Darth Vader')
      .and('contain', 'Eric Schmidt')
  })

  it('User detail form is rendered', () => {
    cy.get('.user-detail-form')
      .should('exist')
      .and('be.visible')
  })

  it.only('User detail for accepts input', () => {
    cy.get('#userName')
      .type('test name')
      .should('have.value', 'test name')
    cy.get('#userActive')
      .click()
      .should('be.checked')
    cy.get('#userFavoriteColor')
      .select('green')
      .should('have.value', 'green')
  })
})
