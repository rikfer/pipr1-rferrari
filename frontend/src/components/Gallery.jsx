/* eslint-disable jsx-a11y/anchor-is-valid */
import Cards from "./Cards";

const Gallery = ({ galleryItems, galleryTitle, handleHideGallery }) => {
  const handleBackButton = () => {
    handleHideGallery();
  };

  return (
    <>
      <nav className="rounded-md w-full">
        <ol className="list-reset flex">
          <img
            src="./activo.png"
            alt={galleryTitle}
            className="object-scale-down h-6 w-8"
          />
          <li className="text-gray-500" onClick={handleBackButton}>
            <a href="#" className="text-gray-500 hover:text-gray-600">
              {galleryTitle}
            </a>
          </li>
        </ol>
      </nav>
      <div className="flex flex-row">
        <Cards galleryItems={galleryItems} />
      </div>
    </>
  );
};

export default Gallery;
