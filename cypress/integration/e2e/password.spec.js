describe('Forgot password test', () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
    });

    it('should press SignIn Button', () => {
        cy.get("#signin_button").click()
    });

    it('should press forgot your password link', () => {
        cy.get('a[href="/forgot-password.html"]').click()
    });

    it('should type email adress', () => {
        cy.get('#user_email').type('dsadsaadsdasdsadsa@gmail.com')
    });

    it('should press send password', () => {
        cy.get('input[name="submit"]').click()
    });

    it('should correct send password', () => {
        cy.get('h3').should('have.text', 'Forgotten Password')
    });

});