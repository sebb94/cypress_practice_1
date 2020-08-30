describe('Browser action', () => {
    it('Should load correct URL', () => {
        cy.visit('http://example.com', {timeout: 3000})
    });

    it('Should check correct ur', () => {
        cy.url().should('include', 'example.com')
    });

    it('should check for correct h1 element on the page', () => {
        cy.get('h1').should('be.visible');
    });

    it('should wait for 3 second', () => {
        cy.wait(3000);
    });

    it('should pasue the execution', () => {
        cy.pause()        
    });

    it('should check for correct h6 element on the page', () => {
        cy.get('h6').should('be.visible');
    });

});