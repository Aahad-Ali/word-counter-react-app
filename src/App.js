import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Text heading="Enter any text here:"/>
      </div>
    </>
  );
}

export default App;
