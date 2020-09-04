describe('Write / Read data to Json / Text file', () => {
    
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name: "Mike", age: 25})
    });

    it('should write data into txt', () => {
        cy.writeFile('log.txt', 'Hello World')
    });
});