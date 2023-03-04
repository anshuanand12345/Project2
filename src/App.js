
import './App.css';
import A from './A';
import B from './B';

function App() {

  const cendol = "2";
  return (
    <div className='center'>
      <A />
      <B cendol={cendol} />
    </div>
  );
}

export default App;
