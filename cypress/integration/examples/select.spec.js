describe('Select box', () => {
    it('Should load webstie', () => {
        cy.visit('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select')
    });

    it('Should select an option from select box', () => {
        cy.get("#pet-select").select("dog")
        cy.get("#pet-select").should('have.value', 'dog')

        cy.get("#pet-select").select("spider")
        cy.get("#pet-select").should('have.value', 'spider')
    });
});