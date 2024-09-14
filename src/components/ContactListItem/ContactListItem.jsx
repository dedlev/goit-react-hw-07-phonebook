import React from 'react';
import { DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, phone }, onDelete }) => {
  return (
    <li>
      <p>
        {name}: {phone}
        <DeleteButton type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteButton>
      </p>
    </li>
  );
};
