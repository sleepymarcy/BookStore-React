import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'

function App() {
  return (
    <div>
        <MyNavbar title="Marcy's Book Store" color="dark" /> 
        <MyJumbotron />
        <MyFooter />
    </div>
  )
}

export default App
