import './Header.css';
import profilePic from '../../img/Profile.jpg';

export const Header = () => {
    return(
        <div className='header_container'>

            <div className='header_title'>
               <p>Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
               <h2>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h2>
               <p>ISSN: 1234-5678</p>
            </div>

            <div className='btn btn_language'>
                <span> 
                    <i className="bi bi-globe"></i> PT,BR <i className="bi bi-caret-down-fill"></i>
                </span>
            </div>

            <div className='user_info'>
                <div>
                <p>Bem vindo!</p>
                <p className='user_email'>ricardofrontend@gmail.com</p>
                </div>
                <img src={profilePic} alt='User profile'></img>
                <span className='notification_count'>2</span>
            </div>

        </div>
    )
};