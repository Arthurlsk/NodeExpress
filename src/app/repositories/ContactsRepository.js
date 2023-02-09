const  { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Arthur',
    email: 'arthurblabla@mail.com',
    phone: '5555555',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findall() {
    return new Promise((resolve) => resolve(contacts));
  }

}
module.exports = new ContactsRepository();
