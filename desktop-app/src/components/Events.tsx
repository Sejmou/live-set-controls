type Props = {
  events: any[];
};

const Events = ({ events }: Props) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
};

export default Events;
