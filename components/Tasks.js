import "@/styles/tasks.css";

export default function Tasks(props) {
  const { tasks } = props;
  return (
    <>
      <div className="tasks_container">
        {tasks.map((t, i) => (
          <div className="task_div" key={i}>
            <section className="text_div">
              <h3>{t[0]}</h3>
              <p>{t[1]}</p>
            </section>
            <section className="action_div"></section>
          </div>
        ))}
      </div>
    </>
  );
}
