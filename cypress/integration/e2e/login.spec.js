describe('Login test', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    });

    it('login with incorrect credentials', () => {
        cy.contains('Signin').click()
        cy.fixture('user').then(user => {
            const username = user.invalid_username
            const password = user.invalid_password

           cy.login(username,password)
        })
    });

    it('validate error message', () => {
        cy.get('.alert-error').contains('are wrong.')
    });

    it('login with correct credentials', () => {
        cy.fixture('user').then(user => {
            const username = user.valid_username
            const password = user.valid_password

             cy.login(username, password)
            
        })
    });

    it('validate profile page', () => {
        cy.get('.icon-user').should('be.visible')
        cy.get('h2.board-header').contains('Cash Accounts')
    });

    it('logout', () => {
         cy.get('.icon-user').click()
         cy.get("#logout_link").click()

    });

    it('validate logout', () => {
        cy.get('#homeMenu').should('have.class','active')
    });
});