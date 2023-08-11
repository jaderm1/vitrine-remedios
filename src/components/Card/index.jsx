import { useContext } from "react";

import { MedicamentosContext } from "../../context/MedicamentosContext";



function Card({medicamento}) {
    const {FavoritarMedicamento} = useContext(MedicamentosContext)
    
    return (
        <>
      <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>

        <img src="https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg" alt="" />
        
        <h4>{medicamento.nome}</h4> 

        <h4>Laboratorio:{medicamento.laboratorio}</h4> 

        <h4>Valor:{medicamento.preco}</h4>



            
            
        </>
    );
}

export default Card;