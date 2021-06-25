class Back_Bag{
    constructor(
    color,
    striplengthL,
    striplengthR,
    BottleHolder,
    zipstatus,
    date
    )
    {
        this.color=color;
       this.striplength={
           left:striplengthL,
           right:striplengthR,

       };
       this.BottleHolder=BottleHolder;
       this.zipstatus=zipstatus;
       this.date=date;
    }
    bagstatus=function(zip){
        this.zipstatus=zip;
    }
    newstriplength=function(L,R){
        this.striplength.left=L;
        this.striplength.right=R;
    }
    age(){
        let now=new Date();
        let before=new Date(this.date);
        let calc=now-before;
        let final=Math.floor(calc/(1000*3600*24));
        return final;
    }
}
export default Back_Bag;