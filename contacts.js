const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');




async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(error.message);
      }
  }
  
  async function getContactById(contactId) {
    const contacts = await listContacts();
    return contacts.find((contact) => contact.id === contactId) || null;
}
  
async function removeContact(contactId) {
    const contacts = await listContacts();
    const contactToRemove = contacts.find((contact) => contact.id == contactId);
  
    if (!contactToRemove) return null;
  
    const updatedContacts = contacts.filter((contact) => contact.id != contactId);
  
    try {
      await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
      return contactToRemove;
    } catch (error) {
        console.error(error.message);
      }
  }
  
    async function addContact(name, email, phone) {
        const newContact = { id: Date.now(), name, email, phone };
        const contacts = await listContacts();
      
        contacts.push(newContact);
      
        try {
          await fs.writeFile(contactsPath, JSON.stringify(contacts));
          return newContact;
        } catch (error) {
          return null;
        }
      } 
  

      module.exports = { listContacts, getContactById, removeContact, addContact };