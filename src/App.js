import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>ipsum</Tooltip>

)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>officiis</Tooltip>
)

function App() {
  return (
    <main className='App'>
     <Split className='left' flexBasis={2}> This is the content for the left 'Split' . Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
     <Tooltip message='one more tooltip message'>Neccessitatibus?
     </Tooltip>

    <TheDate></TheDate>
    <Counter count = {123} step={2}></Counter>
     
     </Split>

     <Split className='right'>
     This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
     </Split>
    
    </main>
  );
}

export default App;