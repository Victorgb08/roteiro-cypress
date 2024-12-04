describe('TODOMvc App', () => {
  it('Verifica se app está abrindo', () => {
    cy.visit('')
  })

  it('Insere uma tarefa', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1) 
      .first()
      .should('have.text', 'TP2 de Engenharia de Software'); 
  });

  it('Insere e deleta uma tarefa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0);
  });

  it('Filtra tarefas completas e ativas', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de ES{enter}')
      .type('Prova de ES{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .first()
      .click();

    cy.get('[data-cy=filter-active-link]')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'Prova de ES');

    cy.get('[data-cy=filter-completed-link]')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de ES');

    cy.get('[data-cy=filter-all-link]')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);
  });

  it('Marca uma tarefa como completa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click();

    cy.get('[data-cy=todos-list] > li')
      .first()
      .should('have.class', 'completed');
  });

  it('Desmarca uma tarefa como completa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click();

    cy.get('[data-cy=todos-list] > li')
      .first()
      .should('have.class', 'completed');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click();

    cy.get('[data-cy=todos-list] > li')
      .first()
      .should('not.have.class', 'completed');
  });
  it('Marca e desmarca uma tarefa como completa', () => {
    cy.visit('');
  
    // Adiciona uma nova tarefa
    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');
  
    // Verifica se a tarefa foi adicionada
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de Engenharia de Software');
  
    // Marca a tarefa como completa
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click();
  
    // Verifica se a tarefa foi marcada como completa
    cy.get('[data-cy=todos-list] > li')
      .first()
      .should('have.class', 'completed');
  
    // Desmarca a tarefa como completa
    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .click();
  
    // Verifica se a tarefa foi desmarcada como completa
    cy.get('[data-cy=todos-list] > li')
      .first()
      .should('not.have.class', 'completed');
  });
});