describe('Main page', () => {

  beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
        statusCode: 200,
        fixture: "mockUrl.json",
      })
      .visit('http://localhost:3000');
  });

  it('should display a title', () => {
    cy.contains('h1', 'URL Shortener');
  });

  it('should have a form with inputs and a button', () => {
    cy.get('form').get('input').get('button')
  });

  it('should have 3 cards visible', () => {
    cy.get('.url')
      .should('have.length', 3)
      .get('.url').last().contains('h3', 'Happy')
  });

  it('should be able to fill out the form', () => {
    cy.get('input').first().type('doggies').should('have.value', 'doggies')
      .get('input').last().type('https://doggiesAreMyBestFriends').should('have.value', 'https://doggiesAreMyBestFriends')
  });

  it('should be able to click the button to get a shortened URL', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      "id": 18,
      "long_url": "https://doggiesAreMyBestFriends",
      "title": "doggies",
      "short_url": "http://localhost:3001/useshorturl/4"
    });
    cy.get('input').first().type('doggies').should('have.value', 'doggies')
      .get('input').last().type('https://doggiesAreMyBestFriends').should('have.value', 'https://doggiesAreMyBestFriends')
      .get('button').click().get('.url')
      .should('have.length', 4)
      .get('.url').last().contains('h3', 'doggies')
      .get('.url').last().contains('p', 'Original URL: https://doggiesAreMyBestFriends')
      .get('.url').last().contains('a', 'Shortened URL: http://localhost:3001/useshorturl/4')
  })



});