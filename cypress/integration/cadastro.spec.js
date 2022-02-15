/// <reference types="cypress" />

import signup from "../pages/SignupPage"
import signupFactory from '../factories/SignupFactory'

describe("Buger Eats", () => {
    // beforeEach(function() {
    //     cy.fixture('deliver').then((del)=> {
    //         this.deliver = del
    //     })
    // })
    it.skip("Cadastro para se tornar um entregador", function () {

        var deliver = signupFactory.deliver();
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";

        signup.go();
        //signup.fillForm(this.deliver.signup);
        signup.fillForm(deliver);
        signup.submit();
        signup.modalContentShouldBe(expectedMessage);
    });

    it.skip("CPF Inválido", function () {

        var deliver = signupFactory.deliver();

        deliver.cpf = '000000141XX'
        signup.go();
        //signup.fillForm(this.deliver.cpf_inv);
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe("Oops! CPF inválido");
    });

    it.skip("E-mail Inválido", function () {

        var deliver = signupFactory.deliver();

        deliver.email = 'natyromanoff.com.br'
        signup.go();
        // signup.fillForm(this.deliver.email_inv);
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe("Oops! Email com formato inválido.");
    });

    context('Campos Obrigatórios', function() {

        const messages= [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'}, 
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function() {
            signup.go()
            signup.submit()
        })

       messages.forEach(function(msg) {
           it(`${msg.field} is required`, function(){
               signup.alertMessageShouldBe(msg.output)
           })
       })

    })

});
