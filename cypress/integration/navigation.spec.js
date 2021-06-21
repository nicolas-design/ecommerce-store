describe('Can navigate', () => {
  it('can visit and load', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="rings-link"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="dropdown"]').select('3');
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="cart"]').click();
    cy.contains('Check Out').should('be.visible');
    cy.get('[data-cy="checkout"]').click();
    cy.location('pathname', { timeout: 10000 }).should('include', '/testcheck');
    cy.contains('[data-cy=shipping]', 'Shipping address').should('be.visible');
    cy.get('[data-cy="name"]', { timeout: 10000 })
      .should('be.visible')
      .type('Herman');
    cy.get('[data-cy="lastname"]').type('Meier');
    cy.get('[data-cy="adress"]').type('Babastraß 233');
    cy.get('[data-cy="city"]').type('Vienna');
    cy.get('[data-cy="country"]').type('Austria');
    cy.get('[data-cy="post"]').type('1190');
    cy.get('[data-cy="email"]').type('bebeb@gmail.com');
    cy.get('[data-cy="card"]').type('2222 4000 7000 0005');
    cy.get('[data-cy="date"]').type('2022-07');
    cy.get('[data-cy="cvv"]').type('119');
    cy.get('[data-cy="cardholder"]').type('Herman Meier');
    cy.get('[data-cy="buttonCheck"]').click();
    cy.get('[data-cy="buttonCheck"]').click();
  });
});
