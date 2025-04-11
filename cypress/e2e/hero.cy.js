// cypress/integration/hero.spec.js

describe('Hero Section Tests', () => {
    beforeEach(() => {
      // Visit the homepage before each test
      cy.visit('http://127.0.0.1:5500/');
    });
  
    it('should display the hero section properly', () => {
      // Check if hero section is visible
      cy.get('.hero').should('be.visible');
      
      // Check heading text
      cy.get('.hero h1').should('contain', 'Welcome to Our Platform');
      
      // Check subheading text
      cy.get('.hero p').should('contain', 'The easiest way to build amazing websites and applications.');
      
      // Check if the hero image placeholder is present
      cy.get('.hero-image .image-placeholder').should('be.visible');
    });
  
    it('should have working CTA buttons', () => {
      // Check if both CTA buttons exist
      cy.get('.cta-buttons .btn').should('have.length', 2);
      
      // Check primary button text
      cy.get('.cta-buttons .btn.primary').should('contain', 'Get Started');
      
      // Check secondary button text
      cy.get('.cta-buttons .btn.secondary').should('contain', 'Learn More');
      
      // Click primary button and check if it has click animation
      // (We're just testing if it's clickable, not navigation since href isn't set)
      cy.get('.cta-buttons .btn.primary').click();
      
      // Click secondary button
      cy.get('.cta-buttons .btn.secondary').click();
    });
  
    it('should be responsive and adapt to different screen sizes', () => {
      // Test on desktop
      cy.viewport(1200, 800);
      cy.get('.hero').should('be.visible');
      
      // Check flex direction on desktop (should be row)
      cy.get('.hero').should('have.css', 'flex-direction', 'row');
      
      // Test on tablet
      cy.viewport(768, 1024);
      
      // Check if layout changes on tablet
      cy.get('.hero').should('have.css', 'flex-direction', 'column');
      
      // Test on mobile
      cy.viewport('iphone-6');
      
      // Check if layout stays column on mobile
      cy.get('.hero').should('have.css', 'flex-direction', 'column');
      
      // Check text alignment on mobile (should be center)
      cy.get('.hero-content').should('have.css', 'text-align', 'center');
      
      // Check buttons alignment
      cy.get('.cta-buttons').should('have.css', 'justify-content', 'center');
    });
  
    it('should handle animations and transitions', () => {
      // Reload page to trigger initial animations
      cy.reload();
      
      // Wait for animations
      cy.wait(500);
      
      // Check if hero content becomes visible with animation
      cy.get('.hero-content').should('have.css', 'opacity', '1');
      cy.get('.hero-content').should('have.css', 'transform').and('not.contain', 'translateY(30px)');
      
      // Check if hero image becomes visible with animation
      cy.get('.hero-image').should('have.css', 'opacity', '1');
      cy.get('.hero-image').should('have.css', 'transform').and('not.contain', 'translateY(30px)');
      
      // Check placeholder image animation
      cy.get('.image-placeholder').should('have.css', 'position', 'relative');
      cy.get('.image-placeholder').should('have.css', 'overflow', 'hidden');
    });
  });