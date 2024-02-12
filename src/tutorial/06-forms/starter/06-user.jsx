import { memo } from 'react';

const User = ({ id, name, handleDelete }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <button className='btn' onClick={handleDelete(id)}>
        remove
      </button>
    </div>
  );
};

export default memo(User);
