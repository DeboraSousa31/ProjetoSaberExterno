import './Apresentacao.css';
export const Apresentacao = () => {
  return (
    <div className="apresentacao">
      <div className="imagem">
        <img src="src/assets/img/home.jpg" className="id" />
      </div>

      <h2>
        Pensou em Medicina, pensou em
        <img src="src/assets/img/fundo.png" className="logo" />
      </h2>
      <p>
        Sempre buscando estabelecer relações duradouras, proporcionando um
        atendimento personalizado e de qualidade excepcional, com indicações
        precisas de diagnósticos.
      </p>
      <h2>Prontuário Eletrônico!</h2>
      <p>
        Receba o Prontuário Eletrônico direto no seu e-mail, com todas as
        informações da consulta de forma simplificada e segura.
      </p>
    </div>
  );
};
