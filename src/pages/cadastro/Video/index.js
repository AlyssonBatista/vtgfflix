import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
 

function CadastroVideo(){
    return(
      <PageDefault>
        <h2>Pagina de cadastro de video</h2>

        <Link to="/cadastro/categoria">
           Cadastrar categoria 
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;