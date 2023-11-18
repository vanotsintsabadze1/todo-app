"use client";
import { useState, useRef } from "react";
import "@/styles/form.css";
import Tasks from "./Tasks";

export default function Form() {
  const [tasks, setTasks] = useState([]);
  const name = useRef();
  const description = useRef();
  return (
    <>
      <section className="wrapper">
        <div className="information_wrapper">
          <input
            className="information_field"
            placeholder="task name"
            ref={name}
          />
          <input
            className="information_field"
            placeholder="description"
            ref={description}
          />
        </div>
        <button
          className="button"
          onClick={() => {
            let taskName = name.current.value;
            let descName = description.current.value;
            if (taskName === "") {
              return;
            } else {
              setTasks((prev) => {
                return [...prev, [taskName, descName]];
              });
              name.current.value = "";
              description.current.value = "";
              console.log(tasks);
            }
          }}
        >
          add
        </button>
      </section>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
