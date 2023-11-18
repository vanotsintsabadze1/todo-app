import "@/styles/tasks.css";
import Image from "next/image";
import { FaTrash, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function Tasks(props) {
  const [isEditable, setEditable] = useState(false);
  const { tasks, setTasks } = props;
  return (
    <>
      <div className="tasks_container">
        {tasks.map((t, i) => (
          <div className="task_div" key={i}>
            <section className="text_div">
              <h3 contentEditable={isEditable}>{t[0]}</h3>
              <p contentEditable={isEditable}>{t[1]}</p>
            </section>
            <IconContext.Provider value={{ size: "15px" }}>
              <section className="action_div">
                <FaTrash
                  value={{}}
                  onClick={() => {
                    setTasks((prev) => {
                      return tasks.filter((p, ind) => ind !== i);
                    });
                    setEditable((prev) => !prev);
                  }}
                />
                <FaEdit
                  onClick={() => {
                    setEditable((prev) => !prev);
                  }}
                />
              </section>
            </IconContext.Provider>
          </div>
        ))}
      </div>
    </>
  );
}
