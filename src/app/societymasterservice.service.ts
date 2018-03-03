import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { API_URL } from '../environments/environment';
import { appmenu } from '../models/appmenu';
import { Observable } from 'rxjs/Observable';
import { SocietyMembers } from '../models/societymembers';
import { WingDetails } from '../models/wingdetails';
import { WingRoom } from '../models/wingroom';

@Injectable()
export class SocietymasterserviceService {

  value:string;
  constructor(private http:Http) { }

  getAppMenuList():Observable<appmenu[]>
  {
    var url = API_URL + 'api/AppMenu/Get';
    return this.http.get(url)
    .map(res => res.json().map(menu => {      
        return new appmenu(
          menu.MenuDescription,
          menu.RoutePath,
          menu.ChildMenuList.map(menu => {
            return new appmenu(
              menu.MenuDescription,
              menu.RoutePath,
              menu.ChildMenuList
            )
          })
        )        
    })
    );
  }

  getSocietyMembersList():Observable<SocietyMembers[]>
  {
    var url = API_URL + 'societymembers/list';
    return this.http.get(url)
    .map(res => res.json().map(menu => {
      return new SocietyMembers(
        menu.SocietyID,
        menu.SocietyMemberID,       
        menu.SocietyWingID,
        menu.RoomNo,
        menu.RoomID,
        menu.FirstName,
        menu.LastName,
        menu.PossessionStartDate,
        menu.PossessionEndDate,
        menu.IsRented,
        menu.PhoneNumber,
        menu.DateOfBirth,
        menu.RoomArea,
        menu.WingName,
        menu.GenderDescription,
        menu.TitleDescription,
      )
    }));
  }

  pushSocietyMember(societymemberdata)
  {
    var url = API_URL + "societymember/create";
    this.http.post(url,societymemberdata).subscribe(r => console.log(r));
  }

  getWingList(): Observable<WingDetails[]>
  {
    var url = API_URL + "societymaster/common/winglist?societyID=1" ;
    return this.http.get(url)
    .map(res => res.json().map(wing => {
      return new WingDetails(
        wing.WingName,
        wing.WingID
      );
    }));
  }

  getRoomList(societyID:number,wingID:number):Observable<WingRoom[]>
  {
    var url = API_URL + "societymaster/common/roomlist?societyID=" +  societyID + "&WingID=" + wingID;
    return this.http.get(url)
    .map(res => res.json().map(room => {
      return new WingRoom (
        room.RoomID,
        room.RoomNumber
      );
    }))
  }

}
