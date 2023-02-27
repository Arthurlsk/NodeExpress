const ContactsRepository=require('../repositories/ContactsRepository');

class ContactController {
   async index(request,response) {
    //listar todos registros


    const { orderBy } = request.query;
    const contacts=  await ContactsRepository.findall(orderBy);




    response.json(contacts);
  }
  async show(request,response){
    //obter um registro
    const { id } =request.params;

    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return response.status(404).json({error: 'User not found'});

    }
    response.json(contact);
  }
  async store(request,response){
    //criar novo registro
    const { name,email,phone,category_id} = request.body;

    if(!name){
      return response.status(400).json({error: 'Name is required'})
    }

    const contactsExist = await ContactsRepository.findByEmail(email);

    if(contactsExist){
      return response.status(400).json({error: 'Email is already in use'})
    }

    const contact=await ContactsRepository.create({
      name,email,phone,category_id,
    });
    response.json(contact);

  }
   async update(request,response){
    //editar registro
    const { id } = request.params;
    const {
      name,email,phone,category_id,
    } = request.body;

    const contactExists= await ContactsRepository.findById(id);
    if(!contactExists){
      return response.status(404).json({error: 'User not found"'});
    }
    if(!name){
      return response.status(400).json({error: 'Name is required'})
    }
    const contactByEmail = await ContactsRepository.findByEmail(email);

    if(contactByEmail && contactByEmail.id !== id){
      return response.status(400).json({error: 'Email is already in use'})
    }
    const contact = await ContactsRepository.update(id,{
      name,email,phone,category_id,
    });
    response.json(contact);
  }
  async delete(request,response){
    const { id } = request.params;


    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }

}
//Singleton
module.exports = new ContactController();
