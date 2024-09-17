import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from '../../redux/selectors';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Spinner } from 'utils/Spinner';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
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
    <div>
      {isLoading && <Spinner />}
      {!isLoading && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
