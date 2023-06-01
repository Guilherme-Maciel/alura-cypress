describe('Alura busca cursos', () => {
    beforeEach(()=>{
        cy.visit('https://www.alura.com.br');
    })
    //Criação dos casos de teste
    it('Buscar curso de java', ()=>{
        //Pesquisar no input de texto         //O que quero digitar
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        //Clicar na lupa                        //Ação
        cy.get('.header-barraBusca-form-submit').click()
        //Checar se a formação foi listada de forma dinâmica
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Java e Orientação a Objetos T5 - ONE');

    })
})