
const Point=class{
    x;
    y;
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static dispaly='POINT';
    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.hypot(dx,dy);

    }

}
    
const p1=new Point(5,5);
const p2=new Point(10,10);
console.log('p1',Point.distance(p1,p2))
