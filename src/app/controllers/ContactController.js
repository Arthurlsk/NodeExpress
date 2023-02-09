const ContactsRepository=require('../repositories/ContactsRepository');

class ContactController {
   async index(request,response) {
    //listar todos registros
    const contacts=  await ContactsRepository.findall();

    response.json(contacts);
  }
  show(){
    //obter um registro
  }
  store(){
    //criar novo registro
  }
  update(){
    //editar registro
  }
  delete(){
    //deletar registro
  }

}
//Singleton
module.exports = new ContactController();
