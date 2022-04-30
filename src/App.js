import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import './Responsive.css';

function App() {
  return (
    <div className='page_root'>
      <Sidebar></Sidebar>
      <main>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
