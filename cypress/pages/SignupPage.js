
class SignupPage {

    go(){

        cy.visit('/')
        cy.get('#page-home a[href]').click()
        cy.url().should('contain', "deliver")
    }

    fillForm(deliver){

        cy.get('input[name=fullName]').type(deliver.name)
        cy.get('input[name=cpf]').type(deliver.cpf)
        cy.get(' input[name=email]').type(deliver.email)
        cy.get('input[name=whatsapp]').type(deliver.whatsapp)

        cy.get('input[name=postalcode]').type(deliver.address.postalcode)
        cy.get('input[type=button]').click()
        cy.get('input[name=address]').should('have.value', deliver.address.street)
        cy.get('input[name=address-number]').type(deliver.address.addressNumber)
        cy.get('input[name=address-details]').type(deliver.address.addressDetails)
        cy.get('input[name=district]').should('have.value', deliver.address.district)
        cy.get('input[name=city-uf]').should('have.value', deliver.address.city_uf)

        cy.contains('.delivery-method li', deliver.deliveryMethod).click()
        // O simbolo ^ antes do = significa que irá procurar 'image' no início do input accept.
        // Para procurar no final do nome utilizamos o simbolo //$
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        cy.get('.button-success').click()

    }

    modalContentShouldBe(expectedMessage){
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage )
    }

    alertMessageShouldBe(expectedMessage){
        //cy.get('span.alert-error').should('have.text', expectedMessage )
        cy.contains('span.alert-error', expectedMessage ).should('be.visible')
    }

}

export default new SignupPage;