import { useCallback, useEffect, useState } from "react";
import { useGetCatalog } from "../hooks/useCatalog";
import constants from "../assets/constants";


const Sidebar = ({ isClicked, setIsClicked, setData, handleLabels }) => {
  const [state, setState] = useState(isClicked);

  useEffect(() => {
    setState(isClicked);
  }, [isClicked]);

  const { mutateAsync } = useGetCatalog();

  const handleOnClick = useCallback(
    async (catalogElement) => {
      const data = await mutateAsync(catalogElement);
      setData(data);
      handleLabels(catalogElement)
      setIsClicked(true);
    },
    [mutateAsync, setIsClicked, setData, handleLabels]
  );

  return (
    <div className='flex flex-col items-center w-full'>
      {constants.map((catalogElement, index) => {
        return (
          <div
            className={`flex flex-col items-center w-full ${state ? "bg-[#f2f2f2]" : ""
              }`}
            onClick={() => handleOnClick(catalogElement.key)}
            key={index}
          >
            <img
              src={`./${catalogElement.key}.png`}
              alt={catalogElement.key}
              className='object-scale-down h-8 w-16 '
            />
            <p className='font-sans text-xs -mt-0.9 mb-3'>{catalogElement.key}</p>
          </div>)
      })}
    </div>
  );
};

export default Sidebar;
