import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { API_URL } from '../environments/environment';
import { appmenu } from '../models/appmenu';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocietymasterserviceService {

  constructor(private http:Http) { }

  getAppMenuList():Observable<appmenu[]>
  {
    var url = API_URL + 'AppMenu/Get';
    return this.http.get(url)
    .map(res => res.json().map(menu => {      
        return new appmenu(
          menu.MenuDescription,
          menu.RoutePath,
          menu.ChildMenuList
        )        
    })
    );
  }

}
