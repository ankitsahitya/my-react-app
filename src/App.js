import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const [test, setTest] = useState(true)

  const incrementCounter = () => {
    setTimeout(() => {
      setTest(false)
    }, 10000);
  }

  useEffect(() => {
    incrementCounter()
  }, [test])

  return (
    <div className="App">
      <Layout mmyAttribute="test" />
      {test && <Footer />}
    </div>
  );
}

export default App;
