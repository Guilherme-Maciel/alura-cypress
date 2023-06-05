describe('Buscar fotos e dados', ()=>{
    it('Buscar fotos do flávio', ()=>{
        //Faz uma requisição
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos"
        //Fazer a requisição e dada uma resposta esperamos que existam algumas propriedades
        }).then((res)=>{
            //Espera-se que o status seja 200
            expect(res.status).to.be.equal(200);
            //Checa se o corpo não está vazio
            expect(res.body).is.not.empty;
            //Checa se existe a propriedade description
            expect(res.body[0]).to.have.property('description');
            //Checa se o nome da propriedade é Farol ilumindado
            expect(res.body[0].description).to.be.equal('Farol iluminado');

        })
    });

    it.only('Fazer login do flávio do flávio', ()=>{
        //Faz uma requisição
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: Cypress.env()
        //Fazer a requisição e dada uma resposta esperamos que existam algumas propriedades
        }).then((res)=>{
            //Espera-se que o status seja 200
            expect(res.status).to.be.equal(200);
            //Checa se o corpo não está vazio
            expect(res.body).is.not.empty;
            //Checa se existe a propriedade description
            expect(res.body).to.have.property('id');
            //Checa se o nome da propriedade é Farol ilumindado
            expect(res.body.id).to.be.equal(1);

        })
    })
})