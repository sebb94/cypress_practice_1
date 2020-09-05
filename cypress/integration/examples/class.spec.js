class BasePage {
    static loadHomePage() {
        cy.visit('https://getbootstrap.com/docs/4.5/examples/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollDown() {
        cy.get('img[alt="Carousel screenshot"').scrollIntoView()
    }

    static scrollUp() {
        cy.get('#_carbonads_js').scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    it('Should scroll down and scroll up on the page', () => {
        HomePage.loadHomePage()
        HomePage.wait(2000)
        HomePage.scrollDown()
        HomePage.wait(2000)
        HomePage.scrollUp()

    });
});