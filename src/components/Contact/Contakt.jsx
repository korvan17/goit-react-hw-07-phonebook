import { useDeleteContactMutation } from 'redux/phoneBookSlice';

export default function Contact({Contact}) {
  const [delContact, {isLoading}] = useDeleteContactMutation();

  return (
    <li className="item" >
      <p>
        {Contact.name} {Contact.phone}
      </p>
      {Contact.name !== 'no matches found' && (
        <button
          className="button"
          type="button"
          onClick={() => delContact(Contact.id)}
        >
          {isLoading ?  'Deleting...' : 'Delete' }
        </button>
      )}
    </li>
  );
}
