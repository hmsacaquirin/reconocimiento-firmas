import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParametersService {
    private ApiRest: string = "/APIRestFirmaElectronica/"
    constructor(
        private _http: HttpClient
    ) {
    }
    getParametros(valores): Observable<any> {
        var Parametros = {
            "para": "seleccion.personal@logicstudioplus.net",
            "asunto": "Pruebas",
            "cuerpo": "Mensaje: nombres " + valores.nombres + " apellidos: " + valores.apellidos + " fecha nacimiento " + valores.fecha
        };
        return this._http.post('https://llerenamaldonado.com/MiOficina/Controlador/envioEmail.php', Parametros);
    }
}