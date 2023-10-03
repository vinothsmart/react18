const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{age} years old</p>
    </article>
  );
};

export default Person;
