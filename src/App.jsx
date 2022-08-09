import Provider from "./redux/Provider"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Provider>
      <Header />
      <Footer />
    </Provider>
  )
}

export default App