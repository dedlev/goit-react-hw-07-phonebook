import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
