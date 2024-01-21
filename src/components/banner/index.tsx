"use client";
// base
import { useEffect, useState } from "react";
// components
import { CustomImage } from "@/compound/customImage";
import BannerImage from "../../assets/images/banner.png";
// icons
import {
  FcEmptyFilter,
  IoSearchSharp,
  MdKeyboardArrowDown,
} from "../../compound/icons/index";

// Component Banner
export const Banner = () => {
  // State cho select Property
  const [selectedProperty, setSelectedProperty] = useState("Property");
  const [showOptions, setShowOptions] = useState(false);
  const optionsProperty = [
    "Property 1",
    "Property 2",
    "Property 3",
    "Property 4",
    "Property 5",
    "Property 6",
    "Property 7",
  ];

  // State cho select Location
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [showOptionsLocations, setShowOptionsLocations] = useState(false);
  const optionsLocations = [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
  ];

  // State choose Rent or Buy
  const [selectedOption, setSelectedOption] = useState("Rent");

  // handle select Property
  const handleSelect = (option: string) => {
    setSelectedProperty(option);
    setShowOptions(false);
  };

  // handle select Locations

  const handleSelectLocation = (option: string) => {
    setSelectedLocation(option);
    setShowOptionsLocations(false);
  };

  // handle choose Rent or Buy
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setSelectedProperty(optionsProperty[0]); // Chọn option đầu tiên của Property
    setSelectedLocation(optionsLocations[0]); // Chọn option đầu tiên của Location
  }, []);

  return (
    <section className=" w-full py-20 bg-skin">
      <div className="container">
        <div className=" px-4 lg:pl-4 lg:pr-0 flex items-center justify-between ">
          <div className="w-full max-w-full lg:max-w-[654px] ">
            <h2 className="text-[46px] lg:text-[60px] font-bold leading-[46px] lg:leading-[70px] mb-[22px]">
              We will find a perfect home for you
            </h2>
            <p className="text-16">
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a residence for you
            </p>

            {/* Form */}
            <form className="mt-[60px] absolute z-40 ">
              {/* Select cho Rent hoặc Buy */}
              <div className="w-full max-w-[230px] grid grid-cols-2 bg-[#fff5e0] place-items-center rounded-tl-[10px] rounded-tr-[10px] text-16">
                <div
                  className={`cursor-pointer w-full flex rounded-tl-[10px] items-center font-semibold justify-center h-10 ${
                    selectedOption === "Rent"
                      ? "bg-yellow rounded-tl-[10px] text-white font-semibold"
                      : "hover:bg-yellow hover:rounded-tl-[10px] hover:text-white transition-all duration-300"
                  }`}
                  onClick={() => handleOptionClick("Rent")}
                >
                  <h4>Rent</h4>
                </div>
                <div
                  className={`cursor-pointer w-full flex items-center font-semibold justify-center rounded-tr-[10px] h-10 ${
                    selectedOption === "Buy"
                      ? "bg-yellow text-white font-semibold rounded-tr-[10px]"
                      : "hover:text-white hover:bg-yellow transition-all duration-300"
                  }`}
                  onClick={() => handleOptionClick("Buy")}
                >
                  <h4>Buy</h4>
                </div>
              </div>

              {/* Input và Select cho Property */}
              <div className="w-full pr-4 lg:w-[1035px] shadow-sm p-[22px] lg:mr-4 bg-white rounded-[10px] flex items-center gap-4 flex-wrap lg:flex-nowrap">
                <div className="w-full flex flex-wrap md:flex-nowrap gap-4 lg:w-[80%]">
                  <input
                    type="text"
                    placeholder="Type keyword..."
                    className="py-[14px] pr-[49px] w-full lg:w-[240px] pl-[17px] rounded-[10px] border border-[1px]-[#E5E5EA] text-primary"
                  />

                  <div
                    onClick={() => setShowOptions(!showOptions)}
                    className=" py-[14px] text-14 cursor-pointer  w-full lg:w-[240px] px-[17px] rounded-[10px] border border-[1px]-[#E5E5EA] text-primary"
                  >
                    <div className="flex items-center justify-between">
                      {selectedProperty} <MdKeyboardArrowDown size={22} />
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      setShowOptionsLocations(!showOptionsLocations)
                    }
                    className=" py-[14px] text-14 cursor-pointer  w-full lg:w-[240px]  rounded-[10px] border border-[1px]-[#E5E5EA] text-primary"
                  >
                    <div className="flex items-center justify-between px-[17px]">
                      {selectedLocation} <MdKeyboardArrowDown size={22} />
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-[30%] items-center gap-4 justify-between lg:justify-start">
                  <div className="p-[20px] rounded-[10px] bg-[#fff5e0] cursor-pointer  hover:bg-yellow hover:text-white transition-all duration-300">
                    <FcEmptyFilter />
                  </div>

                  <div>
                    <button
                      type="button"
                      className="flex items-center gap-2 font-bold justify-center bg-yellow text-white p-[16px] rounded-[10px] text-15 w-[150px] "
                    >
                      Search Now <IoSearchSharp size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal select cho Property */}
              {showOptions && (
                <div className="absolute top-[125px] h-[155px] custom-scrollbar overflow-x-auto left-[271px] bg-white w-[276px]  border-[1px] rounded-md">
                  {optionsProperty.map((option, index) => (
                    <div
                      key={index}
                      className={`option text-14 h-10 flex items-center pr-[29px] pl-[18px] hover:bg-[#f6f6f6] cursor-pointer ${
                        selectedProperty === option
                          ? "text-yellow bg-[#f6f6f6] font-semibold"
                          : ""
                      }`}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}

              {/* Input và Select cho Location */}

              {/* Modal select cho Location */}
              {showOptionsLocations && (
                <div className="absolute top-[124px] h-[155px] custom-scrollbar overflow-x-auto right-[247px] bg-white w-[272px]  border-[1px] rounded-md">
                  {optionsLocations.map((option, index) => (
                    <div
                      key={index}
                      className={`option text-14 h-10 flex items-center pr-[29px] pl-[18px] hover:bg-[#f6f6f6] cursor-pointer ${
                        selectedLocation === option
                          ? "text-yellow bg-[#f6f6f6] font-semibold"
                          : ""
                      }`}
                      onClick={() => handleSelectLocation(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </form>
            {/* theme counts */}
            <div className="flex items-start lg:justify-between lg:items-center lg:gap-16 pt-60">
              <div className="flex flex-col">
                <h4 className="text-30 font-bold">1500 +</h4>
                <p className="text-[#8E8E93] text-[13px] mb-5 font-bold">
                  Property ready
                </p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-30 font-bold">700 +</h4>
                <p className="text-[#8E8E93] text-[13px] mb-5 font-bold">
                  Happy customer
                </p>
              </div>
            </div>
          </div>
          {/* images banner */}
          <div className="h-full hidden md:block">
            <CustomImage alt="banner" className="w-[845px]" src={BannerImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
