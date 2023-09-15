import Button from "./eventos/Button"

const Evento = ({numero}) => {
  function meuEvento() {
    console.log(`opa, fui ativado!${numero}`);
  }
  function segundoEvento() {
    console.log(`opa, fui ativado, segundo Evento!`);
  }
  return (
    <div>
      <p>Clique para disparar um evento: </p>
      <Button event={meuEvento } text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  );
};

export default Evento;
