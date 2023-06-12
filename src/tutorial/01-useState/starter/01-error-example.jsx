const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <>
      <h2>{count}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
