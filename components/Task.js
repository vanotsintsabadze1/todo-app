import { useState } from "react";
import ActionBar from "./ActionBar";

export default function Task(props) {
  const { name, desc, elementIndex, setTaskFunction, tasks } = props;
  const [editable, setEditable] = useState(false);

  return (
    <>
      <section className="text_div">
        <h3 className="task_name" contentEditable={editable}>
          {name}
        </h3>
        <p className="description">Description:</p>
        <p className="description_p">
          {desc == "" ? "No description available" : desc}
        </p>
      </section>
      <ActionBar
        elIndex={elementIndex}
        stFunction={setTaskFunction}
        tasks={tasks}
        g={setEditable}
      />
    </>
  );
}
