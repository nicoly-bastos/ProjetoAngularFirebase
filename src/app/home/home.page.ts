import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(){ 
    this.getFuncionarios();
  }

  isLoading: boolean = false;
  funcionarios: any;
  
    getFuncionarios(){
    
      let funcionario = { CodFun: '1' };
  
      fetch('http://localhost/api/v1/listar_funcionarios.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(funcionario)
        }
      )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.funcionarios = response.funcionarios;
      })
      .catch(erro => {
        console.log(erro);
      })

      .finally(()=>{
        this.isLoading = false;
      })
    }
}
