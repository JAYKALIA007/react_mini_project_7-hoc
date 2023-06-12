const Card = ({ info }) => {
  return (
    <div>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "gray",
          margin: "2px"
        }}
      >
        <span>{`${info ? info + " - HOC modified card" : ""}`}</span>
      </div>
    </div>
  );
};

export default Card;
