import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards";

function App() {
  const [allContent, setAllContent] = useState({});
  const [showContents, setShowContents] = useState([]);
  const buttonTypes = ["All", "Development", "Business", "Design", "Lifestyle"];
  const [currentType, setCurrentType] = useState("All");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://codehelp-apis.vercel.app/api/get-top-courses"
        );
        setAllContent(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (currentType == "All") {
      setShowContents(Object.values(allContent).flat());
    } else {
      setShowContents(allContent[currentType]);
    }
  }, [allContent, currentType]);

  function clickButtonHandler(e) {
    setCurrentType(e);
  }

  return (
    <>
      <div className=" w-screen min-h-screen bg-[#4A4E69]">
        <div className="bg-gray-800 flex justify-center text-white font-bold h-20 ">
          <h1 className="p-6 text-2xl">Top Courses</h1>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap p-6">
          {buttonTypes.map((buttonType, index) => (
            <button
              className="bg-gray-900 hover:bg-gray-700 p-2 border-0 text-white rounded-lg"
              onClick={() => {
                clickButtonHandler(buttonType);
              }}
            >
              {buttonType}
            </button>
          ))}
        </div>
        <div className="text-2xl grid grid-cols-3 p-3 gap-4">
          {showContents.map((showContent, index) => (
            <Cards key={index} showContent={showContent} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
