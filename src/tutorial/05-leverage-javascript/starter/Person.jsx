import avatar from '../../../assets/default-avatar.svg';

const Person = ({ id, name, nickName = '', images }) => {
  //   const img = images?.[0]?.small?.url || avatar;
  //   optional chaining operator (?.) to avoid errors when the data is not available
  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div key={id}>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};

export default Person;
