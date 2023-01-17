describe('Orders Page flows', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders',{
      method: 'GET',
      fixture: '../fixtures/orders.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('When a user visits the page, they can view the page title and the existing orders ', () => {
    cy.get('h1').should('contain', 'Burrito Builder')
    cy.get('.order').should('be.visible')
    cy.get('h3').should('contain', 'Pat')
    cy.get('.ingredient-list > :nth-child(1)').should('contain', 'beans')
    cy.get('.ingredient-list > :nth-child(2)').should('contain', 'lettuce')
    cy.get('.ingredient-list > :nth-child(3)').should('contain', 'carnitas')
    cy.get('.ingredient-list > :nth-child(4)').should('contain', 'queso fresco')
    cy.get('.ingredient-list > :nth-child(5)').should('contain', 'jalapeno')

  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('form').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('[name="beans"]').should('contain', 'beans')
    cy.get('[name="steak"]').should('contain', 'steak')
    cy.get('[name="carnitas"]').should('contain', 'carnitas')
    cy.get('[name="sofritas"]').should('contain', 'sofritas')
    cy.get('[name="lettuce"]').should('contain', 'lettuce')
    cy.get('[name="queso fresco"]').should('contain', 'queso fresco')
    cy.get('[name="pico de gallo"]').should('contain', 'pico de gallo')
    cy.get('[name="hot sauce"]').should('contain', 'hot sauce')
    cy.get('[name="guacamole"]').should('contain', 'guacamole')
    cy.get('[name="jalapenos"]').should('contain', 'jalapenos')
    cy.get('[name="cilantro"]').should('contain', 'cilantro')
    cy.get('[name="sour cream"]').should('contain', 'sour cream')
    cy.get(':nth-child(15)').should('contain', 'Submit Order')
  })


  it("When a user fills out the form, the information is reflected in the input field's value", () => {
    cy.get('input').type('Court').should('have.value', 'Court')
    cy.get('[name="beans"]').click().should('have.value', 'beans')
    cy.get('[name="steak"]').click().should('have.value', 'steak')
    cy.get('[name="carnitas"]').click().should('have.value', 'carnitas')
    cy.get('[name="sofritas"]').click().should('have.value', 'sofritas')
    cy.get('[name="lettuce"]').click().should('have.value', 'lettuce')
    cy.get('[name="queso fresco"]').click().should('have.value', 'queso fresco')
    cy.get('[name="pico de gallo"]').click().should('have.value', 'pico de gallo')
    cy.get('[name="hot sauce"]').click().should('have.value', 'hot sauce')
    cy.get('[name="guacamole"]').click().should('have.value', 'guacamole')
    cy.get('[name="jalapenos"]').click().should('have.value', 'jalapenos')
    cy.get('[name="cilantro"]').click().should('have.value', 'cilantro')
    cy.get('[name="sour cream"]').click().should('have.value', 'sour cream')

    cy.get('p').should('contain', 'Order: beans, steak, carnitas, sofritas, lettuce, queso fresco, pico de gallo, hot sauce, guacamole, jalapenos, cilantro, sour cream')

  })

})