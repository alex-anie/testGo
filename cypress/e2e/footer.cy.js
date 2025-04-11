// cypress/integration/footer.spec.js

describe('Footer Tests', () => {
    beforeEach(() => {
      // Visit the homepage before each test
      cy.visit('http://127.0.0.1:5500/');
      
      // Scroll to footer to ensure it's in viewport
      cy.get('footer').scrollIntoView();
    });
  
    it('should display footer with correct structure', () => {
      // Check if footer exists
      cy.get('footer').should('be.visible');
      
      // Check footer sections
      cy.get('.footer-content').should('exist');
      cy.get('.footer-section').should('have.length', 3);
      cy.get('.footer-bottom').should('exist');
    });
  
    it('should display correct company information and social links', () => {
      // Check first footer section (company info)
      cy.get('.footer-section').eq(0).within(() => {
        // Check heading
        cy.get('h3').should('contain', 'BrandName');
        
        // Check company description
        cy.get('p').should('contain', 'Making technology accessible');
        
        // Check social icons
        cy.get('.social-icons').should('exist');
        cy.get('.social-icons a').should('have.length', 4);
        
        // Check individual social icons
        cy.get('.social-icons a').eq(0).find('i').should('have.class', 'fa-facebook-f');
        cy.get('.social-icons a').eq(1).find('i').should('have.class', 'fa-twitter');
        cy.get('.social-icons a').eq(2).find('i').should('have.class', 'fa-instagram');
        cy.get('.social-icons a').eq(3).find('i').should('have.class', 'fa-linkedin-in');
      });
    });
  
    it('should display navigation links section', () => {
      // Check second footer section (links)
      cy.get('.footer-section').eq(1).within(() => {
        // Check heading
        cy.get('h3').should('contain', 'Links');
        
        // Check list of links
        cy.get('ul').should('exist');
        cy.get('ul li').should('have.length', 5);
        
        // Check individual links
        cy.get('ul li').eq(0).should('contain', 'Home');
        cy.get('ul li').eq(1).should('contain', 'Features');
        cy.get('ul li').eq(2).should('contain', 'Pricing');
        cy.get('ul li').eq(3).should('contain', 'About');
        cy.get('ul li').eq(4).should('contain', 'Contact');
        
        // Check that all links have href attribute
        cy.get('ul li a').each($a => {
          expect($a).to.have.attr('href', '#');
        });
      });
    });
  
    it('should display contact information correctly', () => {
      // Check third footer section (contact info)
      cy.get('.footer-section').eq(2).within(() => {
        // Check heading
        cy.get('h3').should('contain', 'Contact');
        
        // Check contact details
        cy.get('p').should('have.length', 3);
        
        // Check address
        cy.get('p').eq(0).within(() => {
          cy.get('i').should('have.class', 'fa-map-marker-alt');
          cy.contains('123 Main Street');
        });
        
        // Check email
        cy.get('p').eq(1).within(() => {
          cy.get('i').should('have.class', 'fa-envelope');
          cy.contains('info@brandname.com');
        });
        
        // Check phone
        cy.get('p').eq(2).within(() => {
          cy.get('i').should('have.class', 'fa-phone');
          cy.contains('(123) 456-7890');
        });
      });
      
      // Check copyright info
      cy.get('.footer-bottom p').should('contain', '© 2025 BrandName. All rights reserved.');
    });
  });