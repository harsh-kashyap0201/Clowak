import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [Users, fetchUsers] = useState([])

  const userData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
            fetchUsers(json)
      });
  }

  useEffect(() => {
    userData()
  })
  return (
    <div className="App">
      <div className="container">
      <div className="row">
        {Users.map((element,i) => {
            return <div key={i} className="col-md-3">
                <div className="card mx-2 my-2">
                  <img src={`https://avatars.dicebear.com/api/avataaars/${i}.svg`} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">{element.name}</h6>
                    <div className="list">
                      <li className="details"><i class="fa-regular fa-envelope mx-1"></i>  {element.email}</li>
                      <li className="details"><i class="fa-solid fa-phone-flip mx-1"></i>  {element.phone}</li>
                      <li className="details"><i class="fa-solid fa-globe mx-1"></i>  {element.website}</li>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="bottomButton col-md-4"> 
                      <i className="fa-regular fa-heart heart"></i>
                    </div>
                    <div className="bottomButton col-md-4">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="bottomButton col-md-4">
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
            </div>
        })}
      </div>
      </div> 
    </div>
  );
}

export default App;
