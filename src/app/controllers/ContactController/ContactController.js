class ContactController {
  index(request, response) {
    // List all Contacts
    response.send('Contact Controller');
  }

  show() {
    // Get a specific Contact
  }

  store() {
    // Create a new Contact
  }

  update() {
    // Update a Contact
  }

  delete() {
    // Delete a Contact
  }
}

module.exports = new ContactController();
