const myContacts = [
  {
    id: 1,
    name: "Alpha Avalon",
    phone: "+1 111 101010",
    email: "alpha@avalon.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "Betty Brave",
    phone: "+62 812 242424",
    email: "betty@braverian.com"
  },
  {
    id: 3,
    name: "Gamma Gacurio",
    phone: "+63 813 363636",
    email: "gamma@gacurio.dev"
  }
];

const showcontacts = contacts => {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log(
      `[${contact.id}] ${contact.name}  (${contact.phone}) \n\n <${contact.email}>`
    );
  }
};
showcontacts(myContacts);

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = [];

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact);
    }
  }
  return newContacts;
};

const filteredContacts = filterContacts(myContacts, 12);

showcontacts(filteredContacts);
