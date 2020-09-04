describe('keyboard press simulation', () => {
    it('should submit searchbox with pressing enter', () => {
        cy.visit("zero.webappsecurity.com/login.html")
        cy.get("#user_login").type("Some text {enter}")
    });
});