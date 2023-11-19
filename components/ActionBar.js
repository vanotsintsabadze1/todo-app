import { FaTrash, FaEdit } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ActionBar(props) {
  const { setTaskFunction, elementIndex, editValueFunction, tasks } = props;
  let i = elementIndex;
  return (
    <>
      <IconContext.Provider value={{ size: "15px" }}>
        <section className="action_div">
          <FaTrash
            onClick={() => {
              setTaskFunction((prev) => {
                return tasks.filter((p, ind) => ind !== i);
              });
            }}
          />
          <FaEdit onClick={() => editValueFunction((prev) => !prev)} />
        </section>
      </IconContext.Provider>
    </>
  );
}
