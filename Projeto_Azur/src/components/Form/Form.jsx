import React, { useState } from 'react';
import Input from './Input'; 
import './Form.css';
import logo from '../../assets/cadastro.png'



function Form() {
  const [isPessoaFisica, setIsPessoaFisica] = useState(true);

  const handlePessoaChange = (event) => {
    setIsPessoaFisica(event.target.value === 'fisica');
  };

  return (
    <div className="form-wrapper">
      <div className="form-image">
      <img src={logo}/>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1>Cadastro</h1>
          <p className='msgHeader'>Vamos preparar sua conta para você começar a usar!</p>
        </div>

        <div className="form-toggle">
          <label>
            <input
              type="radio"
              value="juridica"
              checked={!isPessoaFisica}
              onChange={handlePessoaChange}
            />
            Pessoa Jurídica
          </label>
          <label>
            <input
              type="radio"
              value="fisica"
              checked={isPessoaFisica}
              onChange={handlePessoaChange}
            />
            Pessoa Física
          </label>
        </div>

        <form className="form-fields">
          <Input label="Email" type="email" placeholder="Digite seu email" />
          <Input label="CPF" type="text" placeholder="Digite seu CPF" />
          <Input label="Telefone" type="tel" placeholder="Digite seu telefone" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <Input label="Confirmar Senha" type="password" placeholder="Confirme sua senha" />

          <button type="submit" className="form-button">
            Cadastrar
          </button>
        </form>

        <div className="form-footer">
          <p>Já tem uma conta? Faça seu <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
