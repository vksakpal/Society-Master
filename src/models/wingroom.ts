export class WingRoom
{
    RoomID:number;
    RoomDescription:string;
    constructor(roomID:number,roomDescription:string)
    {
        this.RoomDescription = roomDescription;
        this.RoomID = roomID;
    }
}