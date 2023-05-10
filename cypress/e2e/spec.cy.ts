describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('nav').get('a').contains('Women')
    // cy.contains('WOMEN')
  })
})
