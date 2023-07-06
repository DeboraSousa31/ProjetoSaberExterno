import './Especialidades.css';

export const PaginaEspecialidades = () => {
  return (
    <div className="especialidades">
      <h1>Nossas especialidades</h1>
      <p className="p2">
        Nossa equipe é formada profissionais qualificados comprometidos com um
        atendimento eficiente.
      </p>

      <div>
        <button className="btncontato1">
          <a href="Cardiologista">Cardiologista</a>
        </button>
        <button className="btncontato2">
          <a href="Dermatologista">Dermatologista</a>
        </button>
        <button className="btncontato3">
          <a href="Ginecologista">Ginecologista</a>
        </button>
      </div>

      <img className="doc1" src="src/assets/img/doc1.png" />
      <img className="doc2" src="src/assets/img/doc2.png" />
      <img className="doc3" src="src/assets/img/doc3.png" />
    </div>
  );
};
