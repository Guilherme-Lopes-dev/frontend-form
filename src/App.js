import React from 'react';
import './App.css';
import Form from './components/Form'
import PlanContexProvider from './hooks/PlanContexProvider';

function App() {
  return ( 
    <PlanContexProvider>
      <div className='App'>
        <Form />
      </div>
    </PlanContexProvider>
  );
}

export default App;