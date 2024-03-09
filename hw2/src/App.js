import List from './components/List/List'

function App() {
  const list = [`Kharkiv`,`Mykolaiv`, `Lviv`, `Poltava`];

  return (
    <>
      <List list={list} color={'lightblue'}/>
    </>
  );
}

export default App;
