// cypress/integration/navigation.spec.js

describe('Navigation', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('http://172.24.102.162:3000/MakMongia/Elite-Final');
  });

  it('should render all hyperlinks in the navigation menu', () => {
    // Get all hyperlinks in the navigation menu
    cy.get('#navbar a').each(($link) => {
      // Click on each hyperlink
      cy.wrap($link).click();

      // Assert that the URL changes after clicking
      cy.url().should('include', $link.attr('href'));
    });
  });
});
