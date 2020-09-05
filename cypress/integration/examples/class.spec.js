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
    before(() => {
        console.info('SetUp')
        HomePage.loadHomePage()
    });

    after(() => {
        console.info("After")
    });

    beforeEach(() => {
        // runs before each it block describe
        console.info("Before each")
    });

    afterEach(() => {
        // runs after each it block in describe
        console.info("After each")
    });

    it.skip('1st Should scroll down and scroll up on the page', () => {
        HomePage.wait(2000)
        HomePage.scrollDown()
        HomePage.wait(2000)
        HomePage.scrollUp()
    });


    it('2nd Should scroll down and scroll up on the page', () => {
        HomePage.wait(2000)
        HomePage.scrollDown()
        HomePage.wait(2000)
        HomePage.scrollUp()
    });

    it('3rd Should scroll down and scroll up on the page', () => {
        HomePage.wait(2000)
        HomePage.scrollDown()
        HomePage.wait(2000)
        HomePage.scrollUp()
    });

    it.only('4th Should scroll down and scroll up on the page', () => {
        HomePage.wait(2000)
        HomePage.scrollDown()
        HomePage.wait(2000)
        HomePage.scrollUp()
    });
});