import { useEffect, useState } from "react";
import { ticketsData } from "../data/tickets";
import TicketCard from "./TicketCard";
import styles from "./TicketList.module.css";

// this is where we are actually going to get the data. This is where we map over the array of data.
export default function TicketList() {
  // tickets below is an array, initial state is an array. if we peak at our fake data, we see that's an array of objects, and if we have an array of objects, we can map over it and render that to the DOM, because in React, arrays render by default. So all we have to do, is map and wrap it inside some JSX.
  const [tickets, setTickets] = useState([]);

  //the use effect's job is to go retrieve the data from the database. at first, we don't have a database set up, so setting up a useEffect isn't going to do much, but we will get one started. Empty brackets makes it so that it only runs once. it will run the arrow function 1 time when the brackets are empty.
  useEffect(() => {
    setTickets(ticketsData);
  }, []);
  console.log(tickets);
  return (
    <div>
      <>
        <h2 className={styles.center}>Tickets</h2>
      </>
      {/* we put parentheses instead of {} inside the arrow function because we want this to be an implicit multi-line return. Arrow functions auto-return. */}
      {tickets.map((ticket) => (
        // then we pass in the ticket component in here, which will need a key prop because we are mapping over it. ticket.id is globally id. We will also need all the props from tha card.
        <TicketCard
          key={ticket.id}
          title={ticket.title}
          description={ticket.description}
          priority={ticket.priority}
          status={ticket.status}
          category={ticket.category}
        />
      ))}
    </div>
  );
}
