import React from 'react';
import { useGetContactsQuery } from 'redux/phoneBookSlice';
import { ClipLoader } from 'react-spinners';
import { getStatusFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contakt';

export default function ContactList() {
  const { data, isFetching } = useGetContactsQuery();
  const statusFilter = useSelector(getStatusFilter);

  return (
    <>
      {isFetching && (
        <ClipLoader
          color="#000000b9"
          loading={true}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {data && (
        <ul>
          {data
            .filter(contact =>
              contact.name.toLowerCase().includes(statusFilter.toLowerCase())
            )
            .map(contact => (
              <Contact Contact={contact} key={contact.id} />
            ))}
        </ul>
      )}
    </>
  );
}
