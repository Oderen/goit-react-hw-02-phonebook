export default function Contact() {
  return (
    <ul>
      <li>
        <p>
          <span>{name}:</span>
          <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </ul>
  );
}
