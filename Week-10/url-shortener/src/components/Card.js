const Card = ({ icon, title }) => {
  return (
    <div className="card">
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
};

export default Card;
