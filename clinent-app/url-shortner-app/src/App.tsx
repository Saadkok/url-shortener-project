import * as React from 'react';
import Header from './component/header/header';
import Container from './component/container/container';
import Footer from './component/footer/footer';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  );
};

export default App;
