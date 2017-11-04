const Results = ({title, ronSays}) => {
  return (
    <li>
    <h4>On: <span className="title">{title}</span></h4>
    <p>Ron Feels: {ronSays.slice(1, ronSays.length - 2)} </p>
    </li>
  );
}