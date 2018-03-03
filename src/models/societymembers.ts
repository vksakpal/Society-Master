export class SocietyMembers
{
    SocietyID:number;
    SocietyMemberID:number;
    SocietyWingID:number;
    RoomNo: number;
    RoomID:number;
    FirstName:string;
    LastName:string;
    PossessionStartDate:string;
    PossessionEndDate:string;
    IsRented:boolean;
    PhoneNumber:string;
    DateOfBirth:string;
    RoomArea:number;
    WingName:string;
    GenderDescription:string;
    TitleDescription:string;
    constructor(societyID:number,societymemberid:number,societywingid:number,roomno:number,roomid:number,firstname:string,lastname:string,possessionstartdate:string,
    possessionenddate:string,isrented:boolean,phonenumber:string,dateofbirth:string,roomarea:number,wingname:string,genderdescription:string,titledescription:string)    
    {
        this.DateOfBirth = dateofbirth;
        this.FirstName = firstname;
        this.GenderDescription = genderdescription;
        this.IsRented = isrented;
        this.LastName = lastname;
        this.PhoneNumber= phonenumber;
        this.PossessionEndDate = possessionenddate;
        this.PossessionStartDate = possessionstartdate;
        this.RoomArea = roomarea;
        this.RoomID = roomid;
        this.RoomNo = roomno;
        this.SocietyID = societyID;
        this.SocietyMemberID = societymemberid;
        this.SocietyWingID = societywingid;
        this.TitleDescription = titledescription;
        this.WingName = wingname;

    }
}