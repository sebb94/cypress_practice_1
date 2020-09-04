describe('custom command login', () => {
    it('should login to page', () => {
        cy.visit("zero.webappsecurity.com/login.html")
        cy.login('username','password')
    });
});