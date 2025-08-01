import Navigation from './navigation/routes'
import { WhatsappFloat } from './components/WhatsappFloat'
import { ScrollToHash } from './components/layout/ScrollToHash'

function App() {
  return (
    <>
      <ScrollToHash />
      <Navigation />
      <WhatsappFloat />
    </>
  )
}

export default App
