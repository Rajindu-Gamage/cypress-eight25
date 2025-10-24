describe('Eight25 Media Website Tests', () => {

  it('Homepage Test - Verify title', () => {
    cy.visit('https://www.eight25media.com/');
    cy.title().should('include', 'eight25');
  });

  it('Navigation Test - Work Page', () => {
    cy.visit('https://www.eight25media.com/');
    cy.get('a[href*="work"]').click();
    cy.contains('Our Work').should('be.visible');
  });

  it('Contact Form Interaction', () => {
    cy.visit('https://www.eight25media.com/contact');
    cy.get('input[name="your-name"]').type('Test User');
    cy.get('input[name="your-email"]').type('testuser@example.com');
    cy.get('textarea[name="your-message"]').type('This is a test message');

    cy.get('input[name="your-name"]').should('have.value', 'Test User');
    cy.get('input[name="your-email"]').should('have.value', 'testuser@example.com');
    cy.get('textarea[name="your-message"]').should('have.value', 'This is a test message');
  });

  it('Responsive Homepage Test - Mobile View', () => {
    cy.viewport(375, 667);
    cy.visit('https://www.eight25media.com/');
    cy.get('.menu-toggle').should('be.visible');
  });

});