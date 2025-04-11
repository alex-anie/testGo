// cypress/integration/navigation.spec.js

describe('Navigation Tests', () => {
    beforeEach(() => {
      // Visit the homepage before each test
      cy.visit('http://127.0.0.1:5500/');
    });
  
    it('should load the homepage successfully', () => {
      // Check if the page title is correct
      cy.title().should('eq', 'Modern Landing Page');
      
      // Check if the header is visible
      cy.get('header').should('be.visible');
      
      // Check if the logo is present
      cy.get('.logo').should('contain', 'Brand');
      cy.get('.logo span').should('contain', 'Name');
    });
  
    it('should navigate through all nav links', () => {
      // Check if all nav links exist
      cy.get('.nav-links li').should('have.length', 5);
      
      // Check if "Home" is active by default
      cy.get('.nav-links li a.active').should('contain', 'Home');
      
      // Check all navigation links text
      cy.get('.nav-links li').eq(0).should('contain', 'Home');
      cy.get('.nav-links li').eq(1).should('contain', 'Features');
      cy.get('.nav-links li').eq(2).should('contain', 'Pricing');
      cy.get('.nav-links li').eq(3).should('contain', 'About');
      cy.get('.nav-links li').eq(4).should('contain', 'Contact');
    });
  
    it('should display mobile menu toggle on smaller screens', () => {
      // Resize viewport to mobile size
      cy.viewport('iphone-6');
      
      // Check if menu toggle is visible on mobile
      cy.get('.menu-toggle').should('be.visible');
      
      // Click the menu toggle
      cy.get('.menu-toggle').click();
      
      // Check if navigation menu becomes visible
      cy.get('.nav-links').should('have.class', 'active');
      
      // Check if toggle icon changes (to close icon)
      cy.get('.menu-toggle i').should('have.class', 'fa-times');
      
      // Click again to close
      cy.get('.menu-toggle').click();
      
      // Check if menu is hidden
      cy.get('.nav-links').should('not.have.class', 'active');
      
      // Check if toggle icon changes back
      cy.get('.menu-toggle i').should('have.class', 'fa-bars');
    });
  
    it('should handle scroll effects correctly', () => {
      // Check initial header shadow
      cy.get('header').should('have.css', 'box-shadow', 'none');
      
      // Scroll down
      cy.scrollTo(0, 200);
      
      // Check if header gets shadow on scroll
      cy.get('header').should('not.have.css', 'box-shadow', 'none');
      
      // Scroll to features section
      cy.get('.features').scrollIntoView();
      
      // Check if features section is visible and animated
      cy.get('.feature-cards .card').should('have.css', 'opacity', '1');
      
      // Scroll to testimonial section
      cy.get('.testimonial').scrollIntoView();
      
      // Check if testimonial content is visible and animated
      cy.get('.testimonial-content').should('have.css', 'opacity', '1');
    });
  });