import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
 

function CadastroCategoria(){
    return(
      <PageDefault>
        <h2>Pagina de cadastro categoria</h2>

        <Link to="/">
           Ir para a home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;