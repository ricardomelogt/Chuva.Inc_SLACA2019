import './Sidebar.css';
import Logo from '../../img/Logo.png';

export const Sidebar = () => {

    const toggleMenu = () => {
        document.getElementById('sidebar_menu').classList.toggle('hidden');
    }

    return(
        <aside className='sidebar_container'>

            <div >
                <h1>SLACA 2019 <i onClick={toggleMenu} className="bi bi-list"></i></h1>
            </div>
            
            <img alt='Logo SLACA 2019' src={Logo}/>

            <nav>
                <ul id="sidebar_menu">
                    <li>Apresentação</li>
                    <li>Comitês</li>
                    <li>Autores</li>
                    <li>Eixos temáticos</li>
                    <li className='selected'>Trabalhos</li>
                    <li>Contato</li>
                </ul>
            </nav>
            
        </aside>
    )
};