import { Route } from "react-router-dom"
import Header from './header/Header'
import Hero from './hero/Hero'
function App() {
  return (
  <>
    <Header />
    <main>
      <Route path="/" component={Hero} />
    </main>
  </>
  )
}
export default App;
