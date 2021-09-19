import icone from '../../assets/icone.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Faustãonismo"
    },
    detalhes: {
        nome: "Faustão",
        iconeLado: icone,
        lado: "Cleiton Side",
        descricao: "O deus da religião Faustonista, criador da Cleiton Power Magic, defende todos de Silvio Santos e sua laia",
        rank: "RANK: 22",
        botao: "Seguir",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta;