function Todo(props) {
  return (
    <div className="card">
      <h2> {props.text} {props.num+1}</h2>
      <div>
        <button > Delete</button>
      </div>
    </div>
  );
}

export default Todo;
