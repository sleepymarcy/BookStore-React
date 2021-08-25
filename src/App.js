import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import LatestReleases from './components/LatestRelease'
import Latest from './components/Latest'

function App() {
  return (
    <div>
        <MyNavbar title="Marcy's Book Store" color="dark" /> 
        <MyJumbotron />
        <h2>Latest Releases from Fantasy</h2>
        <Latest />
        <MyFooter />
        
    </div>
  )
}

export default App
