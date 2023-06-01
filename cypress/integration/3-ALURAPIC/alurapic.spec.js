//Desrição da suit de testes
describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {
        //Clicar no Register Now
        //Usar Contain para identificar elemento com texto = especificado 
        cy.contains('a', 'Register now').click();
        //Clica no botão de registrar
        cy.contains('button', 'Register').click();
        //Validar se o texto existe
        //be.visible: está vísivel para o usuário
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        //Valida as outras mensagens
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagens de email inválido', () => {
        //Clicar no Register Now
        //Usar Contain para identificar elemento com texto = especificado 
        cy.contains('a', 'Register now').click();
        //Usar propriedade para identificar input
        cy.get('input[formcontrolname="email"]').type('jaqueline');
        //Clica no botão de registrar
        cy.contains('button', 'Register').click();
        //Validar se o texto existe
        //be.visible: está vísivel para o usuário
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        //Clicar no Register Now
        //Usar Contain para identificar elemento com texto = especificado 
        cy.contains('a', 'Register now').click();

        cy.contains('button', 'Register').click();
        //Usar propriedade para identificar input
        cy.get('input[formcontrolname="password"]').type('123');
        //Clica no botão de registrar
        cy.contains('button', 'Register').click();
        //Validar se o texto existe
        //be.visible: está vísivel para o usuário
        //Só roda quando tira o foco no campo
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica username com letra maiúscula', () => {
        //Clicar no Register Now
        //Usar Contain para identificar elemento com texto = especificado 
        cy.contains('a', 'Register now').click();

        cy.contains('button', 'Register').click();
        //Usar propriedade para identificar input
        cy.get('input[formcontrolname="userName"]').type('G');
        //Clica no botão de registrar
        cy.contains('button', 'Register').click();
        //Validar se o texto existe
        //be.visible: está vísivel para o usuário
        //Só roda quando tira o foco no campo
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
})