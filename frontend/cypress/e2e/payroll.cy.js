describe("Payroll Page", () => {
  it(
    "logs in, navigates to payroll page, inputs a new payroll and saves to the database",
    { viewportHeight: 1250, viewportWidth: 1500 },
    () => {
      cy.visit("http://localhost:3000/");
      cy.get('[data-test="login"]').click();
      cy.get("#mui-1").click().type("nikmatten");
      cy.get("#mui-2").click().type("password1@");
      cy.get(".MuiButton-contained").click();
      cy.get('[href="/payroll"]').click();
      cy.get(
        ':nth-child(1) > :nth-child(2) > [data-test="start-date"] > .MuiInputBase-root > #period_start'
      ).type("2022-12-13");
      cy.get(
        ':nth-child(1) > :nth-child(3) > [data-test="end-date"] > .MuiInputBase-root > #period_end'
      ).type("2022-12-27");
      cy.get(
        ':nth-child(1) > :nth-child(5) > [data-test="hours-worked"] > .MuiInputBase-root > #hours'
      ).type("80");
      cy.get(
        ':nth-child(1) > :nth-child(6) > [data-test="tips"] > .MuiInputBase-root > #tips'
      ).type("456");
      cy.get(
        ":nth-child(1) > .MuiGrid-container > .MuiGrid-root > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > :nth-child(7) > .MuiTypography-root"
      ).contains("$1456.00*");
      cy.get(
        ':nth-child(1) > :nth-child(8) > .MuiButtonBase-root > [data-testid="SaveIcon"]'
      ).click();
      cy.get(
        ".css-yrqo8j-MuiGrid-root > .MuiGrid-grid-xs-8 > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > :nth-child(7) > .MuiTypography-root"
      )
        .contains("$1456.00*")
        .wait(500);
      cy.get(
        ':nth-child(2) > :nth-child(2) > [data-test="start-date"] > .MuiInputBase-root > #period_start'
      ).type("2022-12-13");
      cy.get(
        ':nth-child(2) > :nth-child(3) > [data-test="end-date"] > .MuiInputBase-root > #period_end'
      ).type("2022-12-27");
      cy.get(
        ':nth-child(2) > :nth-child(5) > [data-test="hours-worked"] > .MuiInputBase-root > #hours'
      ).type("86");
      cy.get(
        ':nth-child(2) > :nth-child(6) > [data-test="tips"] > .MuiInputBase-root > #tips'
      ).type("587.65");
      cy.get(
        ":nth-child(1) > .MuiGrid-container > .MuiGrid-root > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(2) > :nth-child(7) > .MuiTypography-root"
      ).contains("$1744.65*");
      cy.get(":nth-child(2) > :nth-child(8) > .MuiButtonBase-root")
        .click()
        .wait(1000);
      cy.get(
        ".css-yrqo8j-MuiGrid-root > .MuiGrid-grid-xs-8 > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > :nth-child(7)"
      ).contains("$1744.65*");
    }
  );
});
