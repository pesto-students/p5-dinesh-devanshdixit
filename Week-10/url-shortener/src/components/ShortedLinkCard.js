const ShortedLinkCard = (props) => {
  return (
    <div className="shorted-link-card">
      <p>{props.longurl}</p>
      <p>{props.shorturl}</p>
      <i
        onClick={() => navigator.clipboard.writeText(props.shorturl)}
        className="las la-clipboard"
      ></i>
    </div>
  );
};

export default ShortedLinkCard;
