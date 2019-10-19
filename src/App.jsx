import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import ContextProvider from "./Provider";
import coverImage from './Components/~reusables/assets/images/home-bg.jpg';
import Spinner from './Components/~reusables/components/Spinner';
const LandingPage = React.lazy(()=> import('./Components/views/LandingPage/LandingPage'));
const Portfolio = React.lazy(()=> import('./Components/views/Portfolio/Portfolio'));
const AboutPage = React.lazy(()=> import('./Components/views/About/AboutPage'));
const MobileNav = React.lazy(()=> import('./Components/~reusables/components/MobileNav'));

const MainArea = styled.div`
background: url(${coverImage}) top center/cover no-repeat #bababa;
width: 100vw;
  min-height: 86.3vh;
  position: relative;
`;

function App() {
  return (
    <Router>
    <React.Suspense fallback={<Spinner />}>
    <ContextProvider>
    <MainArea>
    <MobileNav/>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/projects" component={Portfolio}/>
    <Route exact path="/about" component={AboutPage}/>
    </Switch>
    </MainArea>
    </ContextProvider>
    </React.Suspense>
    </Router>
  );
}

export default App;
