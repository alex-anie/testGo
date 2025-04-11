// cypress/integration/features.spec.js

describe('Features Section Tests', () => {
    beforeEach(() => {
      // Visit the homepage before each test
      cy.visit('http://127.0.0.1:5500/');
      
      // Scroll to features section to ensure it's in viewport
      cy.get('.features').scrollIntoView();
    });
  
    it('should display the features section correctly', () => {
      // Verify section heading
      cy.get('.features h2').should('contain', 'Our Features');
      
      // Check if features section has the correct heading with decorative line
      cy.get('.features h2').should('be.visible');
      cy.get('.features h2').should('have.css', 'position', 'relative');
      cy.get('.features h2').should('have.css', 'display', 'inline-block');
      
      // Check if feature cards container exists
      cy.get('.feature-cards').should('be.visible');
    });
  
    it('should display exactly three feature cards with correct content', () => {
      // Check if there are 3 feature cards
      cy.get('.feature-cards .card').should('have.length', 3);
      
      // Check first card content
      cy.get('.feature-cards .card').eq(0).within(() => {
        cy.get('i').should('have.class', 'fa-rocket');
        cy.get('h3').should('contain', 'Fast & Responsive');
        cy.get('p').should('contain', 'Our platform is optimized for speed');
      });
      
      // Check second card content
      cy.get('.feature-cards .card').eq(1).within(() => {
        cy.get('i').should('have.class', 'fa-shield-alt');
        cy.get('h3').should('contain', 'Secure');
        cy.get('p').should('contain', 'Your data is protected');
      });
      
      // Check third card content
      cy.get('.feature-cards .card').eq(2).within(() => {
        cy.get('i').should('have.class', 'fa-cogs');
        cy.get('h3').should('contain', 'Customizable');
        cy.get('p').should('contain', 'Tailor the platform');
      });
    });
  
    it('should have hover effects on feature cards', () => {
      // Get the first card
      const card = cy.get('.feature-cards .card').first();
      
      // Check initial transform state
      card.should('have.css', 'transform', 'none');
      
      // Hover over the card
      card.trigger('mouseover');
      
      // Check transform state after hover (should be translated up)
      card.should('have.css', 'transform').and('not.eq', 'none');
      
      // Move mouse away
      card.trigger('mouseout');
      
      // Check transform state after hover removed (should return to original)
      card.should('have.css', 'transform', 'none');
    });
  
    it('should be responsive across different screen sizes', () => {
      // Desktop view: should be grid with 3 columns
      cy.viewport(1200, 800);
      cy.get('.feature-cards').should('have.css', 'display', 'grid');
      
      // Tablet view: should adjust columns
      cy.viewport(800, 1024);
      cy.get('.feature-cards').should('have.css', 'display', 'grid');
      
      // Mobile view: should stack cards (1 column)
      cy.viewport('iphone-6');
      
      // Wait for responsive styles to apply
      cy.wait(300);
      
      // Ensure cards stack properly on mobile
      cy.get('.feature-cards').invoke('css', 'grid-template-columns').then((columns) => {
        // Should be a single column layout on mobile
        expect(columns).to.include('1fr') || expect(columns).to.include('minmax');
      });
      
      // Check that cards are visible and stacked vertically
      cy.get('.feature-cards .card').should('be.visible');
      cy.get('.feature-cards .card').eq(0).should('be.visible');
      cy.get('.feature-cards .card').eq(1).should('be.visible');
      cy.get('.feature-cards .card').eq(2).should('be.visible');
    });
  });