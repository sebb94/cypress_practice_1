describe('Working with inputs', () => {
    it('should load login page', () => {
        cy.visit('zero.webappsecurity.com/login.html')
    });

    it('should fill username', () => {
        const login = cy.get('#user_login')
        login.clear()
        login.type('Some invalid name', {
            delay: 50
        })

    });

    it('should fill password', () => {
        const password = cy.get('#user_password')
        password.clear()
        password.type('Some invalid password', { 
            delay: 50 
        })
    });

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    });

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    });
});