import 'animate.css'

import './App.css'
import AvatarApp from './components/AvatarApp'
import GlobalContext from './context'

function App() {
  return (
    <GlobalContext>
      <AvatarApp />
    </GlobalContext>
  )
}

export default App
