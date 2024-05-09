import React from "react";

interface Props {
  language: string;
}

const About: React.FC<Props> = ({ language }) => {
  return (
    <div className="app-modal_about">
      <div className="app-modal_about__body">
        <div className="app-modal_about__title">1.0.0 </div>
        <div className="app-modal_about__text">
          {language === "pt"
            ? "Olá, este é o meu website. Ele foi desenvolvido com ReactJS e TypeScript. A ideia era criar um site pessoal com uma proposta diferente do habitual, sendo mais divertido de se codar e de acessar."
            : "Hello, this is my website. It was developed with ReactJS and  TypeScript. The idea was to create a personal website with a different proposal than usual, making it more fun to code and access."}
        </div>
        <div className="app-modal_about__text">
          {language === "pt"
            ? "A longo prazo, pretendo transformar esse site em um 'SuperApp', com novas funcionalidades, integrações e principalmente trazer um blog de verdade como componente agnóstico embutido dentro da aplicação."
            : "In the long term, I intend to transform this site into a 'SuperApp'Ï, with new features, integrations and mainly to bring a real blog as an agnostic component embedded within the application."}
        </div>
        <div className="app-modal_about__text">
          {language === "pt"
            ? " Você pode conferir informações mais detalhadas no"
            : "You can see more on "}{" "}
          <a href="https://github.com/saulorodriguesm/my-space/blob/main/README.md">
            README
          </a>{" "}
          {language === "pt" ? "do projeto" : "of the project"}.
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
