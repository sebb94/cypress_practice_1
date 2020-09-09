describe('new payee', () => {

    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    });

    it('should login to profile', () => {
        cy.fixture('user').then(user => {
            const username = user.valid_username
            const password = user.valid_password
            cy.contains("Signin").click();
            cy.login(username, password)

        })
    });

    it('validate profile page', () => {
        cy.get('.icon-user').should('be.visible')
        cy.get('h2.board-header').contains('Cash Accounts')
    });

    it('navigate to add new payee', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
    });

    it('fill accout', () => {
        let val = 123456;
        cy.get('#np_new_payee_name').type("Payee 1")
        cy.get('#np_new_payee_address').type("Payee Address")
        cy.get('#np_new_payee_account').type(val)
        cy.get('#np_new_payee_account').should('have.value', val)
        cy.get('#np_new_payee_details').type("Payee details")
        cy.get("#add_new_payee").click()
    });

    it('should show success message', () => {
        cy.get("#alert_content").should('be.visible').and('contain', 'The new payee Name Was succesfully created')
    });


});