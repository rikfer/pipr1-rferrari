/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import SidebarButton from "./SidebarButton";
import Gallery from "./Gallery";
import constants from "../assets/constants";

const OffCanva = ({ isVisible, data, galleryTitle, setIsClicked }) => {
  const [visibility, setVisibility] = useState(isVisible);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState({});
  const labels = constants.find((e) => e.key === galleryTitle)?.labels;

  const handleSetGalleryData = (resultData) => {
    const items = data.find((m) => m.name === resultData)?.items;
    setGalleryData(items);
  };

  const handleShowGallery = () => {
    setShowGallery(true);
  };

  const handleHideGallery = () => {
    setShowGallery(false);
  };

  const handleClose = () => {
    handleHideGallery();
    setIsClicked(false);
  };

  useEffect(() => {
    setVisibility(isVisible);
  }, [isVisible]);

  useEffect(() => {
    setShowGallery(false);
  }, [data]);

  return (
    <>
      {data && (
        <div
          className={`sidenav flex flex-row ${visibility ? "w-2/5" : "w-0"}  `}
        >
          <div
            className={
              "flex-auto w-11/12 px-4 pt-6 space-y-4 w-full bg-[#f2f2f2]"
            }
          >
            {showGallery ? (
              <Gallery
                galleryItems={galleryData}
                handleHideGallery={handleHideGallery}
                galleryTitle={galleryTitle}
              />
            ) : (
              <>
                <h1 className="font-semibold">{galleryTitle}</h1>
                <div className="space-y-4">
                  {labels &&
                    labels.map((element, index) => (
                      <SidebarButton
                        label={element.name}
                        handleShowGallery={handleShowGallery}
                        setResultData={handleSetGalleryData}
                        key={index}
                      />
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="flex-auto w-1/12 flex items-center">
            <div
              className="bg-[#f2f2f2] flex items-center rounded-r-lg h-12"
              onClick={handleClose}
            >
              <img
                src="./activo.png"
                alt="close"
                className="object-scale-down h-6 w-8"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OffCanva;
