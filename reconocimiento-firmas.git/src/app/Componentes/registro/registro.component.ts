import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParametersService } from '../../services/parameters.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ParametersService]
})
export class RegistroComponent implements OnInit {
  res: string = ""
  nombres: string = "";
  apellidos: string = "";
  fecha: string = "";
  valores: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _parametersservice: ParametersService) {
    this.valores = {
      nombres: '',
      apellidos: '',
      fecha: ''
    }
  }

  async ngOnInit(): Promise<void> {
  }
  async Siguiente() {
    this.getParametros();
  }
  getParametros(): void {
    this._parametersservice.getParametros(this.valores).subscribe(
      response => {
        if (response.respuesta == "ok") {
          this.res = "Enviado email";
        } else {
          this.res = "Error al enviar email";
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}