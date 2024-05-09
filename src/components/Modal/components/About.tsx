import React from "react";

const About: React.FC = () => {
  return (
    <div className="app-modal_about">
      <div className="app-modal_about__body">
        <div className="app-modal_about__title">1.0.0 </div>
        <div className="app-modal_about__text">
          Olá, este é o meu website. Ele foi desenvolvido com <b>ReactJS</b> e
          <b> TypeScript</b>. A ideia era criar um site pessoal com uma proposta
          diferente do habitual, sendo mais divertido de se codar e de acessar.
        </div>
        <div className="app-modal_about__text">
          A longo prazo, pretendo transformar esse site em um "SuperApp", com
          novas funcionalidades, integrações e principalmente trazer um blog de
          verdade como componente agnóstico embutido dentro da aplicação.
        </div>
        <div className="app-modal_about__text">
          Você pode conferir informações mais detalhadas no{" "}
          <a href="https://github.com/saulorodriguesm/my-space/blob/main/README.md">
            README
          </a>
          {" "}do projeto.
        </div>
      </div>
      <div className="app-modal_about__footer">
        <div>app: saulorodrigues.dev</div>
        <div>version: 1.0</div>
        <div>creator: Saulo Rodrigues Martins</div>
      </div>
    </div>
  );
};

export default About;
