describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/#/form')
  })
  it('User select is rendered', () => {
    cy.get('.user-select')
      .should('exist')
      .and('be.visible')
  })

  it('User select has correct data', () => {
    cy.get('.user-select option')
      .should('have.length', 2)
      .and('contain', 'Testerson')
      .and('contain', 'Besterson')
  })
})
