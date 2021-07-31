it('storybook', () => {
  cy.visit(
    'http://localhost:8080/iframe.html?id=eternal-holidaycard--sale-and-sold&viewMode=story'
  );
  cy.document().toMatchImageSnapshot();
});
