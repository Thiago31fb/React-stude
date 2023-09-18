const Saudacao = ({nome}) => {

    function gerarSaudacao(algumNome){
        return `Ola, ${algumNome}, tudo bem?`
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>;
}
 
export default Saudacao;