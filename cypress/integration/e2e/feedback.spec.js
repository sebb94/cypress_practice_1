describe('Feedback test', () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('should load feedback form', () => {
        cy.get('form[action="/sendFeedback.html"')
            .should('be.visible')
    });

    it('should fill name', () => {
        cy.get('input#name').type('Seba')
    });

    it('should fill email', () => {
        cy.get('input#email').type('seba@gmail.com')
    });

    it('should fill subject', () => {
        cy.get('input#subject').type('Subdżekt')
    });

    it('should fill message', () => {
        cy.get('textarea#comment').type('Mesedż')
    });

    it('should send message ', () => {
        cy.contains('Send Message').click()
    });

    it('should show thank you message', () => {
        cy.get('.top_offset').should('include.text','Thank you for your comments')
    });


});