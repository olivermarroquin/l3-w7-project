import styles from "./TicketCard.module.css";
export default function TicketCard({
  title,
  description,
  priority,
  status,
  category,
}) {
  return (
    //   instead of divs, we could use tr or ul
    // this is to avoid having to put all of this inside the same component as a list. as we map over the data, we are going to take that information and place it onto the DOM (that will be from the TicketList)
    <div className={styles.card}>
      <p className={styles.bold}>{title}</p>
      <p>Description: {description}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <p>Category: {category}</p>
      <hr />
    </div>
  );
}
