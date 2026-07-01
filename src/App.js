import logo from './logo.svg';
import './App.css';
import Tabs from './tabs/Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App Changes again again 101.1
        </a> 

      <Tabs
        defaultTabIndex={1}
        tabs={[
            { button: 'Button 1', content: 'Content 1' },
            { button: 'Button 2', content: 'Content 2' },
            { button: 'Button 3', content: 'Content 3' },
          ]}>
          </Tabs>
      </header>
    </div>
  );
}

export default App;
