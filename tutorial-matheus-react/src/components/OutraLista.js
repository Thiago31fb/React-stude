import Item from "./Item";

const OutraLista = ({ itens }) => {
  return (
    <>
      <h3>Lista de coisas boas!</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Nao a itens na lista</p>
      )}
    </>
  );
};

export default OutraLista;
