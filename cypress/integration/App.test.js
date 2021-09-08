describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("increases and decreases count", () => {
    cy.get("button").contains("+").click();
    cy.contains("count: 1");

    cy.get("button").contains("-").click().click();
    cy.contains("count: -1");

    cy.get("button").contains("+").click().click().click();
    cy.contains("count: 2");
  });

  it("resets count", () => {
    cy.get("button").contains("+").click();
    cy.get("button").contains("reset").click();
    cy.contains("count: 0");
  });
});
