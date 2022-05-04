const Card = (props) => {
  const { card } = props;
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={card.img} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {card.name}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
