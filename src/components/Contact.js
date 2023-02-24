import React, { Component } from 'react';

class Contact extends Component {
  
    state = {
      contacts: [
        { id: 1, nom: 'nanasen', email: 'nanasen@example.com' },
        { id: 2, nom: 'tooot', email: 'tooot@example.com' },
        { id: 3, nom: 'nihao', email: 'nihao@example.com' }
      ],
      nouveauContact: { id: '', nom: '', email: '' }
    };

  handleChange = (e) => {
    const nouveauContact = this.state;
    nouveauContact[e.target.name] = e.target.value;
    this.setState({ nouveauContact });
    console.log(nouveauContact);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts, nouveauContact } = this.state;
    const nouvelId = contacts.length + 1;
    const contactAjouté = { ...nouveauContact, id: nouvelId };
    this.setState({
      contacts: [...contacts, contactAjouté],
      nouveauContact: { id: '', nom: '', email: '' }
    });
  }

  render() {
    const { contacts, nouveauContact } = this.state;

    return (
      <div>
        <h2>Liste de contacts</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.nom}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Ajouter un contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nouveauContact.nom}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={nouveauContact.email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Contact;
