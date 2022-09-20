import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='web'>Restaurant Web App</h3>
          <div className="menu">
            <ul className="list-group">
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
                Salad
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                Entree
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                Soup
              </li>
            </ul>
          </div>
                    
      </header>
    </div>
  );
}

export default App;
