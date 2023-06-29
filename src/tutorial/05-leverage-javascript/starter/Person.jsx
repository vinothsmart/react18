const Person = ({ id, name, nickName, images }) => {
  return (
    <div key={id}>
      <img src={images.small.url} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};

export default Person;
