describe('Screenshoots', () => {
    it('Fullpage', () => {
       cy.visit('zero.webappsecurity.com/login.html')
        cy.screenshot({
            capture: 'fullPage'
        })
    });

    it('Element', () => {
       cy.get('.brand').screenshot()
    });

});