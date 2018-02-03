export class appmenu
{
    menudescription:string;
    routepath:string;
    childmenuitems:appmenu[];
    constructor(menudescription,routepath,childmenuitems)
    {
        this.menudescription = menudescription;
        this.routepath = routepath;
        this.childmenuitems = childmenuitems;
    }
}   