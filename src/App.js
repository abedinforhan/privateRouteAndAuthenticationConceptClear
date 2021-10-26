import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About/About';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Details from './Details/Details';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateOne from './PrivateOne/PrivateOne';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PrivateTwo from './PrivateTwo/PrivateTwo';
import Register from './Register/Register';
import Services from './Services/Services';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute exact path="/private-one">
            <PrivateOne></PrivateOne>
          </PrivateRoute>
          <PrivateRoute exact path="/private-two">
            <PrivateTwo></PrivateTwo>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          {/* <Route path="/*">
          <NotFound></NotFound>
        </Route>  */}
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
