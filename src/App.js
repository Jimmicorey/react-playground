import React from 'react'; //<- to use JSX
import Split from './composition/Split';
import './App.css'; //<- Webpack allows use of CSS within component

function App() {
  /*this is the render for this component*/

  return (
    <main className='App'>
        <Split className='left' flexBasis={4}>
          This is the content for the LEFT `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        </Split>
        <Split className='right'>
          This is the content for the RIGHT `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
        </Split>
    </main>
  )

}

export default App;