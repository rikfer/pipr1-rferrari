import React, { useState, useCallback } from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/cache";
import Nav from "./components/Nav";
import OffCanva from "./components/OffCanva";
import Sidebar from "./components/Sidebar";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState({});
  const [catalogType, setCatalogType] = useState('');
  const handleLabels = useCallback((key) => {
    setCatalogType(key);
  }, [setCatalogType])

  return (
    <QueryClientProvider client={queryClient}>
      <div className='grid grid-cols-12'>
        <div className='col-span-full'>
          <Nav />
        </div>
        <div className='col-span-1 h-screen flex flex-col h-full justify-center items-center'>
          <Sidebar
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setData={setData}
            handleLabels={handleLabels}
          />
        </div>
        <div className='col-span-11 h-screen bg-[#e0e0e0]'>
            <OffCanva
              isVisible={isClicked}
              data={data}
              galleryTitle={catalogType}
              setIsClicked={setIsClicked}
            />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
