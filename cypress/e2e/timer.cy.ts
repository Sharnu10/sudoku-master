describe("Timer", () => {
  it("should show exact time after few secounds", () => {
    cy.clock();
    cy.visit("/");
    cy.contains(".status__time", "00:00");
    cy.tick(30_000);
    cy.contains(".status__time", "00:01");
    cy.tick(30_000);
    cy.contains(".status__time", "00:31");
  });
});
