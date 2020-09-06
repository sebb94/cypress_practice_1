function clickMenuLink(link,active = true) {
    cy.get("#" + link).click()
    if(active == true){
        cy.get("#" + link).should('have.class', 'active')
    }
  
}

describe('Forgot password test', () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
    });

    it('homepage', () => {
        clickMenuLink("homeMenu");
        cy.url().should('include','index.html')
        cy.get('.carousel-caption h4')
            .contains('Online Banking')
        cy.get('#online_banking_features')
            .should('have.css', 'display', 'block')
    });

    it('online banking', () => {
        clickMenuLink("onlineBankingMenu")
        cy.url().should('include', 'online-banking.html')
        cy.get('h1')
            .contains('Online Banking')
            .should('have.css', 'color', 'rgb(0, 130, 216)')
            .and('have.css', 'font-size', '60px')
    });

    it('feedback', () => {
        clickMenuLink('homeMenu')
        clickMenuLink('feedback',false)
        cy.url().should('include', 'feedback.html')
        cy.get('form[action="/sendFeedback.html"')
            .should('be.visible')
    });

});