import "@/styles/tasks.css";
import { useState } from "react";
import Task from "./Task";
import ActionBar from "./ActionBar";

export default function Tasks(props) {
  const { tasks, setTasks } = props;
  const [editable, setEditable] = useState(false);
  return (
    <>
      <div className="tasks_container">
        {tasks.map((t, i) => {
          return (
            <>
              <div className="task_div" key={i}>
                <Task name={t[0]} desc={t[1]} editValue={editable} />
                <ActionBar
                  elementIndex={i}
                  setTaskFunction={setTasks}
                  editValueFunction={setEditable}
                  tasks={tasks}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
