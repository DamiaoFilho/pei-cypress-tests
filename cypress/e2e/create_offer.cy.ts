describe("Generate EPI and Create Offer", () => {

  const localdata = {
     'curso':'Tecnologia em Análise e Desenvolvimento de Sistemas - TADS - Noturno',
     'materia': 'Calculo 1',
     'professor': '70',
     'aluno': 'Joaozinho do Grau',
     'situacao': { 1: 'Aberta', 2: 'Fechada'},
     'semestre': {1: "1º Semestre", 2:'2º Semestre'},
     'ano': {'valido':2077,'invalido1':'0','invalido2':'-1',}
  }
  beforeEach(() => {
    cy.visit("/");
    cy.loginCoordinator();
    // cy.get('input[id="id_login"]').type(username);
  });

    it("Create an Offer", () => {
      cy.visit("academics/dashboard/")
      cy.get("a").contains("Ofertas").click()
      cy.get("a").contains("Cadastrar Nova Oferta").click();
      cy.get('select[name="course"]').select(localdata.curso);
      cy.get("select[name='subject']").select(localdata.materia);
      cy.get(`label[for=${localdata.professor}]`).click();
      cy.get('select[id="id_status"]').select(localdata.situacao[1]);
      cy.get('#id_year').type(`${localdata.ano['valido']}`);
      cy.get('select[name="semester"]').select(localdata.semestre[1]);
      cy.get('button').contains('Salvar').click();
    });


    /* Inicio Teste Falta de Preenchimento e valor limite*/
    
    // it("Create an Offer Invalid Limit Value", () => {
    //     /* Analise valor limite com campo que seja pelo menos 1 */
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['invalido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.screenshot('Create an Offer Invalid Limit Value', { capture: 'viewport' });

    // });

    // it("Create an Invalid Unfilled Matter Offering Test", () => {
    //   /* Sem preenchimento do campo do Matéria */
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   // cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.screenshot('Create an Invalid Unfilled Matter Offering Test', { capture: 'viewport' });

    // });

    // it("Create an Invalid Unfilled Teacher Offering Test", () => {
    //   /* Sem preenchimento do campo do Professor */
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   // cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.wait(10)
    //   cy.screenshot('Create an Invalid Unfilled Teacher Offering Test', { capture: 'viewport' });

    // });

    // it("Create an Valid Unfilled Situation Offering Test", () => {
    //   /* Sem preenchimento do campo do Situação*/
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   // cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.screenshot('Create an valid Unfilled Situation Offering Test', { capture: 'viewport' });

    // });

    // it("Create an Invalid Unfilled Year Offering Test", () => {
    //   /* Sem preenchimento do campo do Situação*/
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   // cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.screenshot('Create an Invalid Unfilled Year Offering Test', { capture: 'viewport' });

    // });

    // it("Create an Invalid Unfilled Semester Offering Test", () => {
    //   /* Sem preenchimento do campo do Situação*/
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   // cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Salvar').click();
    //   cy.screenshot('Create an Invalid Unfilled Semester Offering Test', { capture: 'viewport' });

    // });

    // it("Create a valid output all filled in and test the Back function", () => {
    //   /* Sem preenchimento do campo do Situação*/
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("a").contains("Cadastrar Nova Oferta").click();
    //   cy.get('select[name="course"]').select(localdata.curso);
    //   cy.get("select[name='subject']").select(localdata.materia);
    //   cy.get(`label[for=${localdata.professor}]`).click();
    //   cy.get('select[id="id_status"]').select(localdata.situacao[1]);
    //   cy.get('#id_year').type(`${localdata.ano['valido']}`);
    //   cy.get('select[name="semester"]').select(localdata.semestre[1]);
    //   cy.get('button').contains('Voltar').click();
    //   cy.screenshot('Create a valid output all filled in and test the Back function', { capture: 'viewport' });

    // });

    /*Fim dos testes de Falta de Preenchimento e valor limite*/

    // it("Offer details", () => {
    //   cy.visit("academics/dashboard/")
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("select[name='subject']").select(localdata.materia)
    //   cy.get("select[name='teachers']").select(localdata.professor)
    //   cy.get('select[name="semester"]').select(localdata.semestre[2])
    //   cy.get('input[name="year"]').clear().type(`${localdata.ano}`); //erro que necessáriamente a nivel end-to-end necessário pois fica texto salvo
    //   cy.contains('Filtrar').click()
    //   cy.contains('td','Aberta').next('td').then(($nextTd) =>{
    //     cy.wrap($nextTd).find('a').eq(0).click();
    //   });
      
      
    // });

    // it("Accessing an offer", () => {
    //   cy.visit("academics/offers/detail/33/")
    //   cy.get('input[id="studentSearch"]').type(`${localdata.aluno}`);
    //   cy.contains('span',localdata.aluno).next('label').click();
    //   cy.contains('span','Incluir').click();
    //   cy.get("a").contains("Ofertas").click()
    //   cy.get("select[name='subject']").select(localdata.materia)
    //   cy.get("select[name='teachers']").select(localdata.professor)
    //   cy.get('select[name="semester"]').select(localdata.semestre[2])
    //   cy.get('input[name="year"]').clear().type(`${localdata.ano}`); //erro que necessáriamente a nivel end-to-end necessário pois fica texto salvo
    //   cy.contains('Filtrar').click()
    //   cy.contains('td','Aberta').next('td').then(($nextTd) =>{
    //     cy.wrap($nextTd).find('a').eq(0).click();
    //   });
      
      
    // });

  });