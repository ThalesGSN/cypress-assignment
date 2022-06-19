import * as React from 'react';
import { AppBody } from './App.styles';
import Header from './components/Header/Header';
import SavingGoalContainer from './components/SavingGoalContainer/SavingGoalContainer';

const App: React.FunctionComponent = () => (
  <AppBody>
    <Header />
    <SavingGoalContainer />
  </AppBody>
);

export default App;
