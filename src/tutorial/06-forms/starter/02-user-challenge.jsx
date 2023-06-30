import { useState, useCallback } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setUsers((preVal) => {
        return [...preVal, { id: new Date().getTime().toString(), name }];
      });
      setName('');
    },
    [name]
  );

  const handleDelete = useCallback(
    (deleteUserId) => () => {
      setUsers((preVal) => {
        return preVal.filter((user) => user.id !== deleteUserId);
      });
    },
    []
  );

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <div className='form-row'>
        <h4>users</h4>
        {users.map(({ id, name }) => (
          <div
            key={id}
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 20,
              justifyContent: 'center',
            }}
          >
            <p>{name}</p>
            <button className='btn' onClick={handleDelete(id)}>
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserChallenge;
