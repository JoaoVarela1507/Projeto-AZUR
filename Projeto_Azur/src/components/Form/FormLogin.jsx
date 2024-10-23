import React from 'react';
import Input from './Input'; 
import './FormLogin.css';
import logo from '../../assets/login.png'



function FormLogin() {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-header">
          <h1>Login</h1>
          <p className='msgHeader'>Bem-vindo de volta! Por favor, faça seu login!</p>
        </div>

        <form className="form-fields">
          <Input label="Email" type="email" placeholder="Digite seu email" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />

          <div className="form-toggle">
            <label>
              <input type="radio"/>
              Lembre de mim
            </label>
          </div>

          <button type="submit" className="form-button">
            Login
          </button>
        </form>

        <div className="form-footer">
          <p>Não tem uma conta? Faça seu <a href="/cadastro">Cadastro</a></p>
        </div>
      </div>
      <div className="form-image">
        <img src={logo}/>
      </div>
    </div>
  );
}

export default FormLogin;