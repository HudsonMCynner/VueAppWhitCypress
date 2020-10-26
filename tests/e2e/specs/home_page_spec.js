describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
    cy.get('input.hello-world').type('Por hoje é isso pessoal!');
    cy.get('button').click();
  });
});
