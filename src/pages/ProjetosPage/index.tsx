import * as React from "react";
import style from "./ProjetosPage.module.scss";

type Projeto = {
    nome: string;
    descricao: React.ReactElement<any, any>;
    imagem: string;
    link: string;
}

const ProjetoCard = (props: { projeto: Projeto }) => {
    const projeto: Projeto = props.projeto;
    return (
        <div className={style.projeto}>
            <div className={style.projetoImagem}>
                <img src={projeto.imagem} alt={projeto.nome} />
            </div>
            <div className={style.projetoInfo}>
                <h2>{projeto.nome}</h2>
                <p>{projeto.descricao}</p>
                <a href={projeto.link}>{"Ver Projeto"}</a>
            </div>
        </div>
    );
}

const ProjetosPage = () => {
    const projetosGrandes: Projeto[] = [{
        nome: "Pizzaria On",
        descricao: (<p>
            Projeto <span>Fullstack</span> feito <span>ReactJs+Redux</span>,
            <span>Express</span> e <span>MongoDB</span> que implementa um site
            de delivery de pizza customizadas.
        </p>),
        imagem: "/imgs/pizzaon.jpg",
        link: "https://github.com/dsm-cefet-rj/ti-2022-1-grupo_8"
    },
    {
        nome: "Pizzaria Byte",
        descricao: (<p>
            Projeto <span>Fullstack</span> remake da Pizzaria On, um site de delivery
            de pizza customizadas, em <span>Typescript</span> com varias melhorias com
            <span>ReactJs+Redux</span>, <span>Express</span> e <span>MongoDB</span>.
        </p>),
        imagem: "/imgs/pizzaByte.webp",
        link: "https://github.com/tomast1337/Pizzaria-Byte"
    }, {
        descricao: (<p>
            TCC do meu técnico em informática da FAETEC de 2018. Controle de uma
            loja de roupas, feito com <span>Java</span>, <span>Java Swing</span>
            e <span>MySQL</span>.
        </p>),
        nome: "Controle de loja de Roupas",
        imagem: "https://github.com/tomast1337/exercism/blob/main/java/2015-2018/projeto%20vanessa%20e%20nicolas/class%20der.png?raw=true",
        link: "https://github.com/tomast1337/exercism/tree/main/java/2015-2018/projeto%20vanessa%20e%20nicolas"
    },];
    const projetosMedios: Projeto[] = [{
        nome: "Minecraft Visualização Estrutura de Dados",
        descricao: (<p>
            Plugin <span>Spigot</span> em <span>Java</span> que gera visualizações
            de estrutura de dados dentro do jogo.
        </p>),
        imagem: "/imgs/Minecraft Visualização Estrutura de Dados.png",
        link: "https://github.com/tomast1337/Minecraft-Visualizacao-Estrutura-de-Dados"
    },
    {
        nome: "Bot Rio Vagas",
        descricao: (<p>
            <span>WebScrapper</span> feito com <span>Python</span> e
            <span>Selenium</span> que busca vagas e envia currículos no site do
            Rio Vagas.
        </p>),
        imagem: "/imgs/python+selenium.webp",
        link: "https://github.com/tomast1337/Rio-Vagas-Bot"
    },
    {
        nome: "PetShop",
        descricao: (<p>
            Fiz um frontend para esse projeto de Cristhiane da Cruz com
            <span>ReactJs</span>, <span>typescript</span> e <span>Scss</span>.
            Também contribui para o backend feito com <span>Spring</span>.
        </p>),
        imagem: "https://user-images.githubusercontent.com/93226440/187004819-cc08ccfc-fb4d-4a26-a11f-6d4df29142aa.png",
        link: "https://github.com/barroscruzc/petshop"
    }, {
        nome: "CSGO Sticker Finder",
        descricao: (<p>
            Aplicação em <span>ReactJs</span> feita com <span>Typescript</span>
            e com dados processados com <span>Python</span>, <span>Pandas</span>
            e <span>SciPy</span> que permitir achar stickers do jogo CS:GO por cor.
        </p>),
        imagem: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReQ0HdUuqkw9aDAhJ8KhNbv7SiFANhxP33fTxQ69n4x4SJxaPxMO2GkjoD7JIo3LmYpon23wTirkU4MjvxLdCXdw47YQnZqE_-n7kIntsXFw/260fx260f",
        link: "https://sticker-picker.vercel.app/",
    }, {
        nome: "More Sponges mod",
        descricao: (<p>
            Mod para Minecraft em <span>Java</span> que adiciona mais esponjas ao jogo.
        </p>),
        imagem: "/imgs/moresponges.png",
        link: "https://github.com/tomast1337/More-Sponges-Mod"
    }, {
        nome: "Este projeto",
        descricao: (<p>
            Site pessoal feito em <span>ReactJs</span> e <span>TypeScript</span>.
        </p>),
        imagem: "/imgs/Este projeto.png",
        link: "https://github.com/tomast1337/Portf-lio"
    }];
    const projetosPequenos: Projeto[] = [{
        nome: "Black Metal Logo Generator",
        descricao: (<p>
            Aplicação em <span>ReactJs</span> que gera logotipos.
        </p>),
        imagem: "https://github.com/tomast1337/black-metal-logo-generator/blob/main/images/3.png?raw=true",
        link: "https://github.com/tomast1337/black-metal-logo-generator",
    }, {
        nome: "Tabela Periódica",
        descricao: (<p>
            Fiz o porte dese projeto de Cristhiane da Cruz para <span>ReactJs</span>
            com <span>Typescript</span> e <span>Scss</span>.
        </p>),
        imagem: "https://user-images.githubusercontent.com/93226440/186889300-6e542fe0-1797-47d6-8e52-9115290d8684.png",
        link: "https://github.com/barroscruzc/tabelaPeriodica",
    }];

    React.useEffect(() => {
        document.title = "Projetos - Nicolas Vycas Nery";
    });
    return (
        <>
            <div className={style.page}>
                <h1>Projetos Grandes</h1>
                <div className={style.projetos}>
                    {
                        projetosGrandes.sort(() => Math.random() - 0.5).map((projeto: Projeto, index: number) => {
                            return <ProjetoCard projeto={projeto} key={index} />;
                        })
                    }
                </div>
                <h1>Projetos Medios</h1>
                <div className={style.projetos}>
                    {
                        projetosMedios.sort(() => Math.random() - 0.5).map((projeto: Projeto, index: number) => {
                            return <ProjetoCard projeto={projeto} key={index} />;
                        })
                    }
                </div>
                <h1>Projetos Pequenos</h1>
                <div className={style.projetos}>
                    {
                        projetosPequenos.sort(() => Math.random() - 0.5).map((projeto: Projeto, index: number) => {
                            return <ProjetoCard projeto={projeto} key={index} />;
                        })
                    }
                </div>
            </div>
        </>
    );

}

export default ProjetosPage;