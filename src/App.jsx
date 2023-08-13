import {useState} from "react";
import "./index.css";


// // Write your Color component here
// const Color = ({color, setSelectedColor}) => {
//   return <div className={color}
//   onClick={() => setSelectedColor(color)}
//   ></div>
// }

// const App = () => {
//   const [selectedColor, setSelectedColor] = useState("");
//   return (
//     <div id="container">
//       <div id="navbar">
//         <div>Currently selected: </div>
//         <div className={selectedColor}>{selectedColor}</div>
//       </div>
//       <div id="colors-list">
//         <Color color="black" setSelectedColor={setSelectedColor}/>
//         <Color color="violet" setSelectedColor={setSelectedColor}/>
//         <Color color="blue" setSelectedColor={setSelectedColor}/>
//       </div>
//     </div>
//   );
// };

// export default App;




const App = () => {
  const Color = ({ color, selectedColor, setSelectedColor }) => {
    const isSelected = selectedColor === color;
  
    return (
      <div
        className={`color-option ${color} ${isSelected ? "selected" : ""}`}
        onClick={() => setSelectedColor(color)}
      ></div>
    );
  };
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="black"
          selectedColor={selectedColor} 
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="violet"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;





