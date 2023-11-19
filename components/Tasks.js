import "@/styles/tasks.css";
import { useState } from "react";
import Task from "./Task";
import ActionBar from "./ActionBar";

export default function Tasks(props) {
  const { tasks, setTasks } = props;
  return (
    <>
      <div className="tasks_container">
        {tasks.map((t, i) => {
          return (
            <>
              <div className="task_div" key={i}>
                <Task
                  name={t[0]}
                  desc={t[1]}
                  elementIndex={i}
                  setTaskFunction={setTasks}
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
