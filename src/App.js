import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <body class="body">
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/todos" exact>
            <Todo />
          </Route>
          <Route path="/login" exact>
            <section class="centrar">
            <Login></Login>
            </section>
          </Route>
        </Switch>
        </body>
        <Footer></Footer>
      </section>
 </Router>
  );
}


export default App;




