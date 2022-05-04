import Card from "./Card";

const Cards = (props) => {
  const { galleryItems } = props;

  return (
    <div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mt-40 mx-auto ">
          <div className="flex flex-wrap ">
            <div className="flex flex-row space-x-3">
              {galleryItems.map((item, index) => {
                return (
                  <Card card={item} key={index}>
                    {item}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        ;
      </section>
    </div>
  );
};

export default Cards;
