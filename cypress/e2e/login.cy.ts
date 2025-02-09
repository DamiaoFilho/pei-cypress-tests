describe("login", () => {
  const username = "grupo3-coordenador@gmail.com";
  const password = "123deoliveira4";

  beforeEach(() => {
    cy.visit("/");
  });

  it("should log in successfully", () => {
    // Inserir username e senha de forma mais concisa
    cy.get('input[id="id_login"]').type(username);
    cy.get('input[id="id_password"]').type(password);

    // Clicar no botão de login
    cy.get("button").contains("Entrar").click();

    // Verificar se a URL está correta
    cy.url().should("contain", "/");
  });
});
