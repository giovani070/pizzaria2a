const Inicio = () => {

    return (
        <>
            <h2>Página de Início</h2>
            <p>Aula de ReactsJS</p>
            <input type="text" id="texto" />
            <input type="button" id="botão" 
              value="CLIQUE AQUI"
              onClick={()=>alert('Ola Mundo')}
              />
        </>
    )
}
export default Inicio