import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import ContextProvider from "./Provider";
import coverImage from './Components/~reusables/assets/images/home-bg.jpg';
import Spinner from './Components/~reusables/components/Spinner';
const LandingPage = React.lazy(()=> import('./Components/views/LandingPage'));

const MainArea = styled.div`
background: url(${coverImage}) top center no-repeat #bababa
`;

function App() {
  return (
    <Router>
    <React.Suspense fallback={<Spinner />}>
    <MainArea>
    <ContextProvider>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    </Switch>
    </ContextProvider>
    </MainArea>
    </React.Suspense>
    
    </Router>
  );
}

export default App;
