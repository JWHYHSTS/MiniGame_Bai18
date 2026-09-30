'use strict';
window.Visual={
poly(c,points,fill,stroke){c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}},
tower(c,x,y,t,up=[0,0,0,0],angle=0,flash=0,type=0,shield=false){let sum=up.reduce((a,b)=>a+b,0),stage=Math.min(4,Math.floor(sum/4)),colors=['#6df4de','#ffce73','#87b7ff','#f19bff','#97ffbb','#ff9c8e','#a5a0ff','#7aeaff','#f5f28c','#ffa8cf','#b9ebff','#d6acff'],col=colors[sum%colors.length],variant=sum%4;c.save();c.translate(x,y);c.scale(.9,.9);let glow=c.createRadialGradient(0,-10,1,0,-10,90);glow.addColorStop(0,col+'25');glow.addColorStop(1,col+'00');c.fillStyle=glow;c.fillRect(-100,-110,200,200);
// Faceted floating foundation and layered metal armour.
this.poly(c,[[-43,20],[-24,41],[23,41],[43,20],[23,3],[-23,3]],'#141e37',col+'80');this.poly(c,[[-43,20],[-24,29],[24,29],[43,20],[24,40],[-24,40]],'#202e49',col+'50');c.lineWidth=2;c.strokeStyle=col;c.beginPath();c.ellipse(0,25,48+stage*3,18,0,0,7);c.stroke();
for(let side of [-1,1]){this.poly(c,[[side*12,-25],[side*(29+stage*2),-34-stage*4],[side*34,21],[side*15,28]],side===-1?'#35486c':'#1c2b48','#7791b4');c.strokeStyle=col;c.beginPath();c.moveTo(side*24,-15);c.lineTo(side*27,16);c.stroke();}
this.poly(c,[[-14,25],[-12,-42],[0,-63-stage*3],[12,-42],[14,25]],'#111b33','#9cb9e0');c.fillStyle=col;c.shadowColor=col;c.shadowBlur=16;c.fillRect(-4,-35,8,48);c.shadowBlur=0;
// A permanent, obvious silhouette and palette change on EVERY purchase.
if(sum>0){let spread=30+variant*9;for(let side of [-1,1]){let xx=side*spread;
if(variant===1)this.poly(c,[[side*15,-35],[xx,-77],[side*(spread+9),-34],[side*22,-12]],'#324665',col);
else if(variant===2)this.poly(c,[[side*18,-18],[xx,-55],[side*(spread+5),18],[side*32,30]],'#293955',col);
else if(variant===3)this.poly(c,[[side*14,-40],[xx,-62],[side*(spread+10),-25],[side*40,-8]],'#394064',col);
else this.poly(c,[[side*18,-15],[xx,-85],[side*(spread+10),-44],[side*34,24]],'#304b65',col);
}c.strokeStyle=col;c.lineWidth=2;for(let j=0;j<variant+1;j++){c.beginPath();c.ellipse(0,-46-j*9,25+j*7,7,0,0,7);c.stroke();}}
// Every purchase adds a visible engraved segment; each stat also changes a component.
for(let i=0;i<sum;i++){let a=i*Math.PI*2/Math.max(12,sum)+t*.13;c.strokeStyle=i%2?col:'#dce9ff';c.lineWidth=2;c.beginPath();c.moveTo(Math.cos(a)*53,25+Math.sin(a)*20);c.lineTo(Math.cos(a)*59,25+Math.sin(a)*23);c.stroke();}
for(let i=0;i<Math.min(up[2],12);i++){let side=i%2?-1:1,yy=18-Math.floor(i/2)*7;this.poly(c,[[side*30,yy],[side*43,yy-5],[side*40,yy+2],[side*31,yy+6]],'#44638b','#99caff');}
for(let i=0;i<Math.min(up[3],12);i++){let a=t*.6+i*Math.PI*2/Math.max(1,up[3]);c.fillStyle='#84ffb7';c.shadowColor='#84ffb7';c.shadowBlur=8;c.beginPath();c.arc(Math.cos(a)*39,-10+Math.sin(a)*14,2.5,0,7);c.fill();}c.shadowBlur=0;
if(stage>=1)for(let side of [-1,1]){let xx=side*(38+stage*3);this.poly(c,[[xx-5,9],[xx-5,-34],[xx,-52-stage*4],[xx+5,-34],[xx+5,9]],'#233253',col);c.fillStyle=col;c.fillRect(xx-1,-34,2,28);}
if(stage>=2){c.strokeStyle=col+'a0';c.lineWidth=2;c.beginPath();c.ellipse(0,-48,32+stage*3,10,t*.18,0,7);c.stroke();}
if(stage>=3)for(let side of [-1,1])this.poly(c,[[side*17,-39],[side*58,-62],[side*45,-25],[side*31,-17]],'#334265',col);
// Independent turret turns toward target. Fire-rate adds parallel conduits.
c.save();c.rotate(angle);let length=38+up[0]*1.2;this.poly(c,[[8,-8],[length,-5],[length+6,0],[length,5],[8,8]],'#344b6e','#adcee8');c.fillStyle=col;c.shadowColor=col;c.shadowBlur=8;c.fillRect(12,-2,length-6,4);for(let i=0;i<up[1];i++){let yy=(i%2?1:-1)*(6+Math.floor(i/2)*2);c.fillRect(14,yy,14+Math.floor(i/2),1);}c.restore();c.shadowBlur=0;
let bob=Math.sin(t*2)*3;this.poly(c,[[0,-88-stage*3+bob],[12+stage,-68+bob],[0,-48+bob],[-12-stage,-68+bob]],col,'#efffff');this.poly(c,[[0,-88-stage*3+bob],[0,-48+bob],[-12-stage,-68+bob]],'#ffffff70');
if(shield){c.strokeStyle='#a7d4ff99';c.fillStyle='#a7d4ff08';c.beginPath();c.ellipse(0,-16,66,82,0,0,7);c.fill();c.stroke();}
if(flash>0){let k=1-flash/1.6,cl=['#ffce73','#b197ff','#85c9ff','#82f4c6'][type];c.globalAlpha=Math.min(1,flash);c.strokeStyle=cl;c.lineWidth=3;c.beginPath();c.ellipse(0,10,50+k*65,28+k*40,0,0,7);c.stroke();let g=c.createLinearGradient(0,-140,0,30);g.addColorStop(0,cl+'00');g.addColorStop(1,cl+'70');c.fillStyle=g;c.fillRect(-28,-145,56,175);c.globalAlpha=1;}c.restore();},
enemy(c,e,t,region){let m=CFG.monsters[e.kind]||CFG.monsters.bat,col=m.color,s=e.size,anim=Math.sin(t*8+(e.seed||0));c.save();c.translate(e.x,e.y);c.fillStyle='#0006';c.beginPath();c.ellipse(0,s*.85,s,.35*s,0,0,7);c.fill();c.strokeStyle=col;c.lineWidth=2;
switch(e.kind){case 'slime':c.fillStyle=col;c.beginPath();c.moveTo(-s,s*.6);c.bezierCurveTo(-s*1.1,-s, s,-s*(1+anim*.1),s,s*.6);c.quadraticCurveTo(0,s,-s,s*.6);c.fill();break;
case 'bat':case 'fast':for(let side of [-1,1])this.poly(c,[[0,0],[side*s*1.9,-s*(.5+anim*.4)],[side*s*1.4,s*.5],[side*s*.6,s*.25]],col,'#e2cfff');c.fillStyle='#7f4ca9';c.beginPath();c.ellipse(0,0,s*.5,s*.8,0,0,7);c.fill();break;
case 'spider':for(let side of [-1,1])for(let j=0;j<4;j++){c.beginPath();c.moveTo(side*4,j*4-6);c.lineTo(side*(s+5),j*7-12+anim*2);c.lineTo(side*(s+8),j*7-5);c.stroke();}c.fillStyle=col;c.beginPath();c.ellipse(0,4,s*.65,s*.7,0,0,7);c.fill();c.fillStyle='#a14265';c.beginPath();c.arc(0,-4,s*.55,0,7);c.fill();break;
case 'beetle':for(let side of [-1,1])for(let j=0;j<3;j++){c.beginPath();c.moveTo(side*5,j*5-5);c.lineTo(side*(s+4),j*8-10+anim*2);c.lineTo(side*(s+7),j*8-3);c.stroke();}c.fillStyle=col;c.beginPath();c.ellipse(0,0,s*.75,s,0,0,7);c.fill();c.strokeStyle='#30243e';c.beginPath();c.moveTo(0,-s);c.lineTo(0,s);c.stroke();break;
case 'golem':case 'tank':this.poly(c,[[-s,-s*.6],[-s*.6,-s],[s*.7,-s],[s,-s*.3],[s*.8,s],[-s*.8,s]],'#526d96',col);c.fillStyle=col;c.fillRect(-s-5,-2,6,s);c.fillRect(s-1,-2,6,s);c.strokeStyle='#182b45';c.beginPath();c.moveTo(-s,-3);c.lineTo(0,2);c.lineTo(2,s);c.stroke();break;
case 'wraith':c.globalAlpha=.8;this.poly(c,[[-s,s],[-s,-s*.3],[0,-s*1.2],[s,-s*.3],[s,s],[s*.4,s*.65],[0,s*1.3],[-s*.4,s*.65]],col,'#d8ffff');break;
case 'hound':this.poly(c,[[-s,s*.3],[-s,-s],[0,-s*.4],[s,-s],[s,s*.3],[0,s]],col,'#ffe0ba');c.strokeStyle='#ffd173';c.beginPath();c.moveTo(-5,s);c.lineTo(0,s+8+anim*2);c.lineTo(5,s);c.stroke();break;
default:c.fillStyle=col;c.beginPath();c.arc(0,0,s,0,7);c.fill();}
c.globalAlpha=1;if(e.elite){c.strokeStyle='#ffe08a';c.lineWidth=2;c.setLineDash([3,3]);c.beginPath();c.arc(0,0,s+5,0,7);c.stroke();c.setLineDash([]);this.poly(c,[[0,-s-22],[4,-s-17],[0,-s-12],[-4,-s-17]],'#ffe08a');}if(e.kind==='boss'){c.shadowColor=col;c.shadowBlur=18;this.poly(c,[[-s,-s*.5],[-s*1.4,-s*1.5],[-s*.5,-s],[0,-s*1.8],[s*.5,-s],[s*1.4,-s*1.5],[s,-s*.5]],'#564277','#ffe0a0');c.shadowBlur=0;c.strokeStyle='#ffd990';c.beginPath();c.arc(0,0,s+5,0,7);c.stroke();}
c.fillStyle='#152038';c.fillRect(-6,-3,4,5);c.fillRect(3,-3,4,5);c.fillStyle='#fff';c.fillRect(-5,-3,2,2);c.fillRect(4,-3,2,2);if(e.hp<e.max){c.fillStyle='#352039';c.fillRect(-s,-s-11,s*2,3);c.fillStyle='#ffb4cf';c.fillRect(-s,-s-11,s*2*Math.max(0,e.hp/e.max),3);}c.restore();},
showcase(t){let el=document.getElementById('towerShowcase');if(!el)return;let c=el.getContext('2d');c.clearRect(0,0,500,480);c.save();c.translate(250,260);c.scale(2.2,2.2);this.tower(c,0,0,t,[5,4,4,3],-.45,0,0,false);c.restore();}
};
