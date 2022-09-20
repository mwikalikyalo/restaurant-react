import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function checkBox(){
  var salad= document.getElementsByClassName('form-check-input me-2')
  if (salad.checked == true){  
    return document.getElementsByClassName("collapse").innerHTML = "You might also want: ";  
  } 
}

function Collapse() {
  return (
    <div className="App"> 
          <div className="menu">
            <ul className="list-group">
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse" onClick={checkBox}/>
                Salad
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse2"/>
                Entree
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse3"/>
                Soup
              </li>
            </ul>
          </div>
          <div className='collapse'>
            <ul className="list-group">
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse"/>
                Santa Fe
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse2"/>
                Greek
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." data-bs-toggle="collapse3"/>
                Asian
              </li>
            </ul>
          </div>
    </div>                    
  );
}

export default Collapse;