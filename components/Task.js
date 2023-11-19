export default function Task(props) {
  const { name, desc, editValue } = props;
  return (
    <>
      <section className="text_div">
        <h3 contentEditable={editValue}>{name}</h3>
        <p className="description">Description:</p>
        <p>{desc}</p>
      </section>
    </>
  );
}
