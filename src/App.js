import React, { Suspense, useContext } from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import EditStudent from '../src/pages/EditStudent';
import AuthContextProvider from '../src/Context/Auth'
import { ThemContext } from './Context/Them';
const AddStudent = React.lazy(() => import('../src/pages/AddStudent'));

const App = () => {

  const { them, light, dark } = useContext(ThemContext)
  const themApp = them ? light : dark
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App" style={{ background: themApp.bg, color: themApp.syntax, transition: '1000ms' }}>
          <Toolbar />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-student" exact render={() => (
              <Suspense fallback={<p>...loading</p>}>
                <AddStudent />
              </Suspense>)}
            />
            <Route path="/student/:studentid" exact component={EditStudent} />
            <Route render={() => <h1>not Found</h1>} />
          </Switch>
        </div>
      </AuthContextProvider>
    </BrowserRouter>

  );
}


export default App;
