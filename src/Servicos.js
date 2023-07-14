import logo from './imagens/logo.avif';
import banho2 from './imagens/banho2.jpg';
import './css/servicos.css';


function Servicos() {
    return (
    <div class="wrapper">  
        <header>
            <img src={logo} width="330" height="220" className="logo-pets" alt="logo" />
        
            <nav>
                <ul>
                    <li><a href='#' onClick={App}></a></li>
                    <li><a href="#" class = "active">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <div class="intro">
                <h1>Nossos serviços:</h1>
            </div>

            <div>
                <img src={banho2} width="330" height="220" className="logo-pets" alt="logo" />
                <p style="font-size: 30px;">Banho animal!</p>
            </div>
        </main>
    </div>
    );
  }
  
  export default App;
  