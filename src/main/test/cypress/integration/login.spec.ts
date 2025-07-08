import faker from 'faker'

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('login');
  })

  it('Should display the login form', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo obrigatorio')
      .should('contain.text', '🔴')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo obrigatorio')
      .should('contain.text', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('email')
      .focus()
      .type(faker.random.word())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Valor invalido')
      .should('contain.text', '🔴')
    cy.getByTestId('password')
      .focus()
      .type(faker.random.alphaNumeric(3))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Valor invalido')
      .should('contain.text', '🔴')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
