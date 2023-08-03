const { Command } = require('commander');
const program = new Command();
const contacts = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const { action, id, name, email, phone } = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const contactsList = await contacts.listContacts();
        console.table(contactsList);
      break;

    case 'get':
      const contactById = await contacts.getContactById(id);
      console.log(contactById ? 'Contact found:' : 'Contact not found:', contactById);
      break;

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      console.log('New contact added:', newContact);
      break;

    case 'remove':
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact ? 'Contact removed:' : 'Contact not found:', removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({ action, id, name, email, phone });