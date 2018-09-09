import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {
  constructor() {}

  private API_URL = 'http://localhost:57116/api/';

  url(path: string) {
    return this.API_URL + path;
  }

  headers() {
    const headersParams = new Headers({ 'Content-Type': 'application/json' });

    if (localStorage['token']) {
      const authToken = localStorage['token'];
      headersParams.append('Authorization', `Bearer ${authToken}`);
    }

    const options = new RequestOptions({ headers: headersParams });

    return options;
  }

  extrairDados(response: Response) {
    const data = response.json();
    console.log(data);
    return data || {};
  }

  processarErros(erro: any) {
    console.log(erro);
    console.log(erro.status);
    return Observable.throw('Erro acessando servidor remoto.');
  }
}
