import { useState, useCallback } from 'react';

const ControlledInputs = () => {
  const [formData, setFromData] = useState({
    name: '',
    email: '',
  });

  const handleChange = useCallback((e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFromData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData.name, formData.email);
    },
    [formData]
  );

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          id='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-input'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
