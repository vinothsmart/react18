const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button type="button" className="btn" key={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
