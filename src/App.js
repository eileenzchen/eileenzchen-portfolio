import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import What2Yum from './components/Projects/What2Yum/What2Yum.js'
import BakingFactory from './components/Projects/BakingFactory/BakingFactory.js'
import Fitvio from 'components/Projects/Fitvio/Fitvio';
import Weee from 'components/Projects/Weee/Weee';
import CapitalOne from 'components/Projects/CapitalOne/CapitalOne';
import NotFound from './components/NotFound/NotFound.js'
import Work from 'components/Work/Work';
import Play from 'components/Play/Play';
import Resume from 'components/Resume/Resume';
import About from 'components/About/About';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const TRACKING_ID = "G-TXCV3YQ850"; // YOUR_OWN_TRACKING_ID
  // ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <Router>
        {/* take to top of page when redirect to new route */}
        <ScrollToTop />
        <div className="Site">
          <Header />
          <div className="SiteContent">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/play" component={Play}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/about" component={About}/>
              <Route path="/play" component={Play}/>
              <Route path="/capitalone" component={CapitalOne}/>
              <Route path="/weee" component={Weee}/>
              <Route path="/what2yum" component={What2Yum}/>
              <Route path="/bakingfactory" component={BakingFactory}/>
              <Route path="/fitvio" component={Fitvio}/>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>      
      </Router>
    </>
   
  );
}


export default App;
