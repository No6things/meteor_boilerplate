Meteor.methods({
  seedCollection( collection ) {
    check( collection, String );
    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Seed( 'Users', {
        data: [
          {
            email: 'osoflash_2@hotmail.com',
            password: 'password',
            profile: {
              name: { first: 'Alberto', last: 'Cavadia' }
            },
            roles: [ 'admin' ]
          },
          {
            email: 'noor.perez@gmail.com',
            password: 'password',
            profile: {
              name: { first: 'Noor', last: 'Perez' }
            },
            roles: [ 'admin' ]
          }
        ]
      });
    } else {
      Seed( 'Products', {
        min: 5,
        environments: [ 'development', 'staging', 'production' ],
        model( index ) {
          return {
            name: faker.commerce.product(),
            price: faker.commerce.price()
          };
        }
      });
    }
  },
  clearCollection( collection ) {
    check( collection, String );
    let isUsers = collection === 'Users';

    if ( isUsers ) {
      Meteor.users.remove({});
    } else {
      global[ collection ].remove({});
    }
  }
});
