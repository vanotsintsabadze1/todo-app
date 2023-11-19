import { FaTrash, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function ActionBar(props) {
  const { stFunction, elIndex, tasks, g } = props;
  const [isOn, setToggle] = useState("black");

  const editButton = () => {
    if (isOn === "black") {
      setToggle("green");
    } else {
      setToggle("black");
    }
    g((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ size: "15px" }}>
        <section className="action_div">
          <FaTrash
            onClick={() => {
              stFunction((prev) => {
                return tasks.filter((p, ind) => ind !== elIndex);
              });
            }}
          />
          <IconContext.Provider value={{ color: isOn }}>
            <FaEdit onClick={editButton} />
          </IconContext.Provider>
        </section>
      </IconContext.Provider>
    </>
  );
}
