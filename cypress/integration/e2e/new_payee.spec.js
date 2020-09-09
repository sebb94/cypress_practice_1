describe('New Payee Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.fixture('user').then(user => {
        cy.get('#signin_button').click()
        const username = user.valid_username
        const password = user.valid_password
            cy.login(username, password)
        })
    })


    it('should add new payee to the list', () => {
        cy.get('.icon-user').should('be.visible')
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Adress')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
    })
    
    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee Name was successfully created')
    })
})
