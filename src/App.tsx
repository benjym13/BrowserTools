import './App.scss'
import { ToolBar } from './components/toolBar/ToolBar'
import { type Button } from './types/types'



function App() {
  return (
      <div className="browsertool">
        {/* <Button label='soy un button' disabled={true}></Button> */}
        <ToolBar></ToolBar>
      </div>
  )
}

export default App
