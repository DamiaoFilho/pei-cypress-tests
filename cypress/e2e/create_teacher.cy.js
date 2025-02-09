describe("Cadastro de Docente", () => {
  const username = "grupo3-coordenador@gmail.com";
  const password = "123deoliveira4";

  beforeEach(() => {
    cy.visit("/");

    // Fazer login
    cy.get('input[id="id_login"]').type(username);
    cy.get('input[id="id_password"]').type(password);
    cy.get("button").contains("Entrar").click();
    cy.url().should("contain", "/");

    cy.contains("a", "Acadêmico").click({ force: true });
    cy.contains("div", "Docentes").click({ force: true });
    cy.contains("a", "Cadastrar Docente").click({ force: true });
  });

  // DEU CERTO PRA CRIAR MESMO COM CARACTERES ESPECIAIS NO NOME (REPORTAR)
  it("Testando caracteres especiais no campo nome", () => {
    cy.get("#id_name").type("@!123##");
    cy.get("#id_code").type("12345");
    cy.get("#id_email").type("teste@email.com");
    cy.get("#id_campus").select("Jucurutu");

    cy.get("button").contains("Salvar").click();

    cy.contains("O professor foi cadastrado com sucesso.").should("be.visible");
  });
});
