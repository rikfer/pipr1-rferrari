
const SidebarButton = ({ label, handleShowGallery, setResultData }) => {

  const handleOnClick = () => {
    setResultData(label);
    handleShowGallery(true);
  }

  return (
    <>
      <div className='flex justify-between items-center w-full rounded-lg bg-white p-2' onClick={handleOnClick}>
        <p>{label}</p>
        <img
          src='./activo.png'
          alt={`${label}`}
          className='object-scale-down h-4 w-8 rotate-180'
        />
      </div>
    </>
  );
};

export default SidebarButton;
