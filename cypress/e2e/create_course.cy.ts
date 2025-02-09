describe("Cadastro de Curso", () => {

  beforeEach(() => {
    cy.visit("/");

    // Fazer login
    cy.loginCoordinator();

    cy.contains("a", "Acadêmico").click({ force: true });
    cy.contains("div", "Cursos").click({ force: true });
    cy.contains("a", "Cadastrar Novo Curso").click({ force: true });
  });

  it("Deve preencher e enviar o formulário corretamente", () => {
    cy.get("#id_name").type("Engenharia de Software");
    cy.get("#id_period").select("Matutino");
    cy.get("#id_duration_type").select("Semestral");
    cy.get("#id_course_type").select("Pós-Graduação");
    cy.get("#id_number_of_periods").type("8");

    cy.get("button").contains("Salvar").click();

    cy.contains("O curso foi cadastrado com sucesso.").should("be.visible");
  });

  it("Deve exibir erro ao tentar enviar o formulário vazio", () => {
    cy.get("button").contains("Salvar").click();

    cy.get("article[role='alert']").should("be.visible");

    cy.contains("p", "Nome: Este campo é obrigatório.").should("be.visible");
    cy.contains("p", "Turno: Este campo é obrigatório.").should("be.visible");
    cy.contains("p", "Tipo: Este campo é obrigatório.").should("be.visible");
    cy.contains("p", "Tipo de duração: Este campo é obrigatório.").should(
      "be.visible"
    );
    cy.contains(
      "p",
      "Número de períodos/Anos: Este campo é obrigatório."
    ).should("be.visible");
  });

  // DEU CERTO PRA CRIAR MESMO COM CARACTERES ESPECIAIS NO NOME (REPORTAR)
  it("Testando caracteres especiais no campo nome", () => {
    cy.get("#id_name").type("@!123##");
    cy.get("#id_period").select("Matutino");
    cy.get("#id_duration_type").select("Semestral");
    cy.get("#id_course_type").select("Pós-Graduação");
    cy.get("#id_number_of_periods").type("8");

    cy.get("button").contains("Salvar").click();

    cy.get("article[role='alert']").should("be.visible");
    cy.contains(
      "p",
      "Nome: O campo não deve conter caracteres especiais."
    ).should("be.visible");
  });
});
