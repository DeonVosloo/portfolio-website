import './App.css';
import AppHeader from './components/header/Appheader'
import Skills from './components/skills/Skills'
import Introduction from './components/introduction/Introduction';
import ExperiencesGrid from './components/experiences/Experiencesgrid';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" id="Home">
      <AppHeader/>

      <div id="About">
        <Introduction/>
      </div>
      
      <div id="Work">
        <ExperiencesGrid/>
      </div>
      
      <div id="Skills">
        <Skills/>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;
