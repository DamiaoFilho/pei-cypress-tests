describe('Testes de Discentes', () => {
  // PERMITE O CADASTRO SEM EQUIPE, REPORTAR BUG
  it('Testa se um discente é criado sem uma equipe responsával', () => {
    cy.loginCoordinator()

    cy.visit('/people/student/create/')
    cy.get('input[id="id_image"]').selectFile("cypress/files/foo.jpg")
    
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('input[id="id_name"]').type('Discente Teste G3')
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('input[id="id_email"]').type("discenteg3@gmail.com")
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('select[id="id_course"]').select("1")
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('input[id="id_registration"]').type("2019100003")
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('input[id="id_reference_period"]').type("1")
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('label[for="sector_NAPNE"').click()
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('label[for="1"').click()
    cy.get('button').contains('Salvar').click()
    cy.url().should("contain", "student/create/")

    cy.get('textarea[id="id_personal_history"').type("História pessoal do discente");

    cy.get('button').contains('Salvar').click()

    cy.get("input[id='id_name']").should('have.value', "Discente Teste G3")
    cy.get("input[id='id_email']").should('have.value', "discenteg3@gmail.com")
    cy.get("select[id='id_course']").should('have.value', "1")
    cy.get("input[id='id_registration']").should('have.value', "2019100003")
    cy.get("input[id='id_reference_period']").should('have.value', "1")
    cy.get("input[id='1']").should('not.be.checked')
    cy.get("textarea[id='id_personal_history']").should('have.value', "História pessoal do discente")



  })
})