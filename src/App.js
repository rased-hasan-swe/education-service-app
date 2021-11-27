import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contruct from './components/Contruct/Contruct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/NotFound/Notfound';
import PrivateRoute from './components/privteroute/PrivateRoute';
import Registration from './components/Registration/Registration';
import Services from './components/Services/Services';
import AuthProvider from './Hooks/AuthProvider/AuthProvider';


function App() {
  return (
    <div >
     <AuthProvider>
     <Router >
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
         <PrivateRoute exact path="/services">
            <Services></Services>
         </PrivateRoute>
         <Route exact path="/contract">
            <Contruct></Contruct>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/registration">
            <Registration></Registration>
         </Route>
         <Route path="*">
            <Notfound></Notfound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
