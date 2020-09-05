describe('Working with inputs', () => {

    before(() => {
        cy.visit('zero.webappsecurity.com/login.html')
    });

    it('expose jQuery element in the current window', () => {
        const password = Cypress.$('.btn')
        password.click()
    });

});