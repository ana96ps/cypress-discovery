
var faker = require('faker')

export default {

    deliver: function() {

        var firstname = faker.name.firstName();
        var lastname = faker.name.lastName();


        var data = {
            name: `${firstname} ${lastname}`,
            cpf: '00000014141',
            email: faker.internet.email(firstname),
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                addressNumber: '1000',
                addressDetails: 'apto 142',
                district: 'Itaim Bibi',
                city_uf: 'São Paulo/SP'
            },
            deliveryMethod: 'Van/Carro',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}