import { useState } from "react";
import ColorNames from "../colorscons";
function ColorBgChanger() {
  const [color, setColor] = useState("olive");
  const [colorList] = useState(ColorNames);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-2 px-3 gap-1 ">
        {colorList.map((cn, index) => (
          <div
            className="flex flex-wrap justify-center bg-amber-50  px-1 py-1 rounded-4xl shadow-lg"
            key={cn}
          >
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg "
              style={{
                color:
                  cn.toLowerCase() === "black" || index === 5 || index === 0
                    ? "white"
                    : "black",
                background: cn,
              }}
              onClick={() => setColor(cn)}
            >
              {cn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ColorBgChanger;
