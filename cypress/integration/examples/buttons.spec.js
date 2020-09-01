describe('Browser actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 6000 })
        cy.url().should('include', 'index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    });

    it('should click on travel category', () => {

        cy.get('a')
        .contains('Travel')
        .click()
        
        cy.get('h1').contains('Travel')
    });

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)

    });

    it('Click on poetry category', () => {
            cy.get('a')
            .contains('Poetry')
            .click();
    });

    it('Click Olio book', () => {
            cy.get('a[title="Olio"').click()
    });

    it('Check price of book', () => {
            let price = '£23.88';
            cy.get('.price_color').contains(price)
    });
});