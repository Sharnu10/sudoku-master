/// <reference types="cypress">
describe("test hint button", () => {
  it("fill each empty cell", () => {
    cy.visit("/");
    cy.get(".game__cell.game__cell--filled").should("have.length", 45);

    cy.get(".game__cell")
      .not(".game__cell--filled")
      .each(($cell) => {
        cy.wrap($cell).click();
        cy.get(".status__action-hint").click();
        cy.get(".overlay__text").contains("You");
      });
  });
});
