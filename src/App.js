import Todo from "./components/Todo";
function App() {
  var n = 10;
  const list = []
  for(var i = 0; i < n; i++){
    list.push(<Todo text = "Task " num = {i}/>)
  }
  return (
    <div>
      <h1> My todos</h1>
      {list}
    </div>
  );
}

export default App;
