describe('Write / Read data to Json / Text file', () => {
    
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name: "Mike", age: 25})
    });

    it('should write data into txt', () => {
        cy.writeFile('log.txt', 'Hello World')
    });

    it('should read and verify json file', () => {
        cy.readFile('log.json').its('age').should('eq',25)
    });

    it('should read and verify txt file', () => {
        cy.readFile('log.txt').should('eq','Hello World')
    });
});