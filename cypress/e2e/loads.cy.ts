describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get(".game__cell--filled").should("have.length.greaterThan", 20);
  });

  it("shows 10 secounds", () => {
    cy.visit("/");
    cy.contains(".status__time", "00:10", { timeout: 11_000 });
  });
});
