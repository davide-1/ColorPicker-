import {useState} from "react";



const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = selectedColor === color;

  return (
    <div
      className={`color-option ${color} ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`color-option ${selectedColor} selected`}></div>
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





