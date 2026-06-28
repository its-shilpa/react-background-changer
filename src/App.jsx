import { useState } from "react";

function App() {
  const defaultColor = 'white';

  const [color, setColor] = useState(defaultColor);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
  ];

  const randomColor = () => {
    const random =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

    setColor(random); 
  }

  const resetColor = () => {
    setColor(defaultColor);
  };

  return (
    <div className="w-full h-screen transition-all duration-500 ease-in-out" style={{ backgroundColor: color }}>
      <div className="flex justify-center pt-20">
         <div className="bg-white/90 px-8 py-4 rounded-xl shadow-xl text-center">
         <h2 className="text-xl font-semibold text-gray-700">
            Current Color
          </h2>
          <p className="text-3xl font-bold mt-2 uppercase">{color}</p>
         </div>
      </div>

      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-4 rounded-xl shadow-xl">
          {
            colors.map((item) => (
              <button key={item}
              onClick = {() => setColor(item)}
              style = {{ backgroundColor: item}}
              className={`
                px-5 py-2 rounded-lg shadow-lg
                transition-all duration-300
                hover:scale-105 hover:-translate-y-1
                ${
                  item === color
                    ? "ring-4 shadow-stone-500 scale-105"
                    : ""
                }
                ${item === "yellow" ? "text-black" : "text-white"}
              `} 
              >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))
          }

           {/* Random Button */}
          <button
            onClick={randomColor}
            className="bg-gray-900 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            🎲 Random
          </button>

          {/* Reset Button */}
          <button
            onClick={resetColor}
            className="bg-gray-300 text-gray-900 px-5 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}



// Old code for background color changer start

//function App() {
  //const [color, setColor] = useState("olive");

  //return (   
    // <div
    //   className="w-full h-screen transition-all duration-500 ease-in-out"
    //   style={{ backgroundColor: color }}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-white shadow-lg"
    //         style={{ backgroundColor: "red" }}
    //         onClick={() => setColor("red")}
    //       >
    //         Red
    //       </button>
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-white shadow-lg"
    //         style={{ backgroundColor: "blue" }}
    //         onClick={() => setColor("blue")}
    //       >
    //         Blue
    //       </button>
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-white shadow-lg"
    //         style={{ backgroundColor: "green" }}
    //         onClick={() => setColor("green")}
    //       >
    //         Green
    //       </button>
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-gray-800 shadow-lg"
    //         style={{ backgroundColor: "yellow" }}
    //         onClick={() => setColor("yellow")}
    //       >
    //         Yellow
    //       </button>
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-white shadow-lg"
    //         style={{ backgroundColor: "purple" }}
    //         onClick={() => setColor("purple")}
    //       >
    //         Purple
    //       </button>
    //       <button
    //         className="outline-none px-4 py-2 rounded-xl text-white shadow-lg"
    //         style={{ backgroundColor: "orange" }}
    //         onClick={() => setColor("orange")}
    //       >
    //         Orange
    //       </button>
    //     </div>
    //   </div>
    // </div>   
  //);
//}

// Old code for background color changer end

export default App;
