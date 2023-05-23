// import Contact from './Contact/Contact';

export default function ContactList({ id, name, number, onDelete }) {
  return (
    <ul>
      <li>
        <p>
          <span>{name}:</span>
          <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDelete}>
          Delete
        </button>
      </li>
    </ul>
  );
}
