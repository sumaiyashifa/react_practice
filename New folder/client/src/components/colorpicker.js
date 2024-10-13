import { useState } from "react";
export function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
  
    const style = {
      backgroundColor: color
      
    };
    const handleColorChange = (e) => {
        setColor(e.target.value);
      };
      return (
        <div className="picker-control">
          <h2>Color Picker</h2>
          <div className="color" style={style}>
            <p>selected color:{color}</p>
          </div>
    
          <div className="picker-control">
            <label>select a color: </label>
            <input
              type="color"
              onChange={handleColorChange}
              value={color}
              id="colorSelect"
            />
           
          </div>
        </div>
      );    
}