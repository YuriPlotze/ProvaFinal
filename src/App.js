import logo from './imagens/logo.avif';
import banho from './imagens/banho.webp';
import produtos from './imagens/produto.jpg';
import './css/App.css';
import React from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import { redirect } from "react-router-dom";

function App() {
  return (
    <div class="wrapper">  
      <Navigate to ='/servicos'></Navigate>
        <header>
          
         <img src={logo} width="330" height="220" className="logo-pets" alt="logo" />
            <nav>
                <ul>
                    <li><a href='#' class="active">Home</a></li>
                    <li><a href='#' >Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>

        <main>

            <div class="left-col">
                <h1>Cuidado e carinho para o seu pet!</h1>
                <p>Somos apaixonados por animais e dedicados a oferecer cuidados excepcionais para os 
                    pets, proporcionando-lhes carinho e bem-estar.
                </p>
                
            </div>
            
            <div class="right-col">
                <div class="card card1">
                    <div class="card-details">
                        <div>
                            <img src={banho} width="300" height="200" className="banho-pets" alt="banho" />
                        </div>
                    </div>
                </div>
                <div class="card card2">
                    <div class="card-details">
                        <div>
                            <img src={produtos} width="300" height="200" className="produtos-pets" alt="produto" />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
  );
}

export default App;
