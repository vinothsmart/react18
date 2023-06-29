const Person = ({ id, name, nickName = '', images }) => {
  const img = images && images[0].small.url;
  return (
    <div key={id}>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};

export default Person;
