import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import ContextProvider from "./Provider";
import coverImage from './Components/~reusables/assets/images/home-bg.jpg';
import Spinner from './Components/~reusables/components/Spinner';
import MobileNav from './Components/~reusables/components/MobileNav';
const LandingPage = React.lazy(()=> import('./Components/views/LandingPage/LandingPage'));

const MainArea = styled.div`
background: url(${coverImage}) top center no-repeat #bababa
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
    </Switch>
    </MainArea>
    </ContextProvider>
    </React.Suspense>
    </Router>
  );
}

export default App;
