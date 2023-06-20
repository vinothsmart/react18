import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'Default Value'}</h2>
      {text && (
        <div>
          <h2>what ever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>what ever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'Edit' : 'Add'}</button>
      {user ? (
        <div>
          <h4>hello there user</h4>
        </div>
      ) : (
        <div>
          <h4>please join</h4>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => (
  <div>
    <h2>what ever return</h2>
    <h2>{name}</h2>
  </div>
);

export default ShortCircuitExamples;
