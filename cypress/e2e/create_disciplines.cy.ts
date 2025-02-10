describe("Cadastro de Disciplina", () => {

    beforeEach(() => {
      cy.visit("/");
  
      cy.loginCoordinator();
  
      cy.contains("a", "Acadêmico").click({ force: true });
      cy.contains("div", "Disciplinas").click({ force: true });
      cy.contains("a", "Cadastrar Nova Disciplina").click({ force: true });
    });
  
    
    it("Testando formulário válido", () => {
      cy.get('input[name=name]').type("teste de disciplina");
      cy.get("label[for=1]").click();
      cy.get("label[for=Semestral]").click();
  
      cy.get("button").contains("Salvar").click();
  
      cy.contains("Disciplina criada com sucesso!").should("be.visible");
    });

    it("Testando formulário inválido com caracteres especiais", () => {
        cy.get('input[name=name]').type("123#$%/<>");
        cy.get("label[for=1]").click();
        cy.get("label[for=Semestral]").click();
    
        cy.get("button").contains("Salvar").click();
    
        cy.get("article[role='alert']").should("be.visible");
        cy.contains("p", "Nome: O campo não deve conter caracteres especiais.").should("be.visible");
    });
  });
  