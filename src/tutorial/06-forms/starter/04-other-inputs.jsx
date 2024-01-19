import { useCallback, useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('vue');

  const handleShipping = useCallback((e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  }, []);

  const handleFramework = useCallback((e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  }, []);

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            id='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            id='framework'
            className='form-control'
            value={framework}
            onChange={handleFramework}
            name='framework'
          >
            {frameworks.map((framework) => {
              return (
                <option key={framework} value={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;