import React from 'react'

// sass
import './style/Header.sass'

// img
import Pokebola from './img/poke-bola.svg'
import Pikachu from './img/pikachu.svg'

const Header = () => {
  return (
    <div className='header'>
        <nav className='nav-header'>
          <img src={Pokebola} alt="" />
          <p>Pokemon</p>  
        </nav>
        
        <div className="img-header">
            {/* <img src={Pikachu} alt="" /> */}
            
            <div className="pikachu-um"><p>Pikachu</p></div>
            <div className="pikachu-dois"><p>Pikachu</p></div>
          
        </div>

        <main className='main-header'>
            {/* <img src={Pikachu} alt="" /> */}
            <div className="main-container-um">
                <h1>Let’s Go, Pikachu!</h1>
                <p>Torne-se o melhor Treinador de Pokémon que puder, <br /> 
                    enquanto batalha outros Treinadores, Líderes de <br />
                    Ginásios e a sinistra Equipe Rocket.
                </p>
            </div>
            <div className="main-container-dois">
                <button>Download</button>
            </div>
        </main>

        <footer className='footer-header'>
                <p>Copyright &copy; 2022 | Thiago Torres</p>
            </footer>
    </div>
  )
}

export default Header