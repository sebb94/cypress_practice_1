describe('Scroll', () => {
    it('Should scroll up and down', () => {
        cy.visit('https://getbootstrap.com/docs/4.5/examples/')
        cy.wait(2000)
        cy.get('img[alt="Carousel screenshot"').scrollIntoView();
        cy.wait(2000)
        cy.get('#_carbonads_js').scrollIntoView();
    });

  
});