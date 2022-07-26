import * as React from "react";
import ShoutOutsStyle from "./ShoutOuts.module.scss";

interface shoutOut {
    nome: string;
    link: string;
    mensagem: string;
    foto: string;
}

const ShoutOutsPage = () => {

    const shoutOuts: shoutOut[] = [
        {
            nome: "Davi Campanaro",link: "https://github.com/DaveTheCamper",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/44680026?v=4"
        },
        {
            nome: "Cristhiane da Cruz",link: "https://github.com/barroscruzc",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/93226440?v=4"
        },
        {
            nome: "Bernardo Costa",link: "https://github.com/Bentroen",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/29354120?v=4"
        },
        {
            nome: "Diego de Paula",link: "https://github.com/DiegoPaula",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/77380810?v=4"
        },
        {
            nome: "Felipe Nieto",link: "https://github.com/NietoCurcio",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/51931239?v=4"
        },
        {
            nome: "Marcus Oliveira",link: "https://github.com/mvgoliveira",
            mensagem: "",foto: "https://avatars.githubusercontent.com/u/53785487?v=4"
        }
    ];

    React.useEffect(() => {
        document.title = "ShoutOuts - Nicolas Vycas Nery";
    });

    return (
        <div className={ShoutOutsStyle.page}>
            <h1>Shout-outs</h1>
            <p>
                Pagina dedicada a programadores e profissionais que conheci durante os meus anos de estudo e aprecio o trabalho deles.
            </p>
            <div className={ShoutOutsStyle.shoutOuts}>
                {
                    shoutOuts.sort(() => Math.random() - 0.5).map((shoutOut, index) => {
                        return (
                            <div className={ShoutOutsStyle.shoutOut} key={index}>
                                <img src={shoutOut.foto} alt={shoutOut.nome} />
                                <div className={ShoutOutsStyle.shoutOutInfo}>
                                    <h2>{shoutOut.nome}</h2>
                                    {shoutOut.mensagem && <p>{shoutOut.mensagem}</p>}
                                    <a href={shoutOut.link}>GitHub Profile</a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ShoutOutsPage;