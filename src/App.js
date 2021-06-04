import React,{Suspense} from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import EditStudent from '../src/pages/EditStudent';
const AddStudent = React.lazy(()=>import('../src/pages/AddStudent')) ;
const App=() =>{
  
  return (
    <BrowserRouter>
      <div className="App"> 
        <Toolbar />
        <div style={{marginTop:'70px'}}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-student" exact render={()=>(
              <Suspense fallback={<p>...loading</p>}>
                <AddStudent />
              </Suspense>)} 
            />
            <Route path="/student/:studentid" exact component={EditStudent} />
            <Route render={()=><h1>not Found</h1>} />
          </Switch>
          
          
        </div>
        
    </div>
    </BrowserRouter>
    
  );
}


export default App;
