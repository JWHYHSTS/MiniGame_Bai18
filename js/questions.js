'use strict';
window.Bank=[];
(function(){
const n=x=>String(x).replace('.',','), f=a=>a===1?'x²':a===-1?'−x²':n(a)+'x²';
const add=(type,tier,prompt,answer,solution,hints,extra={})=>Bank.push({id:type+'-'+String(Bank.filter(q=>q.type===type).length+1).padStart(2,'0'),type,tier,prompt,answer,solution,hints,...extra});
for(let i=0;i<16;i++){
let tier=Math.floor(i/4)+1,a=[1,-1,2,-2,.5,-.5,1.5,-1.5][i%8],x=[-2,3,-3,2,4,-4,2,-2][i%8];
if(tier<3)add('NUM',tier,`Cho y = ${f(a)}. Khi x = ${n(x)}, giá trị y bằng bao nhiêu?`,a*x*x,`y = ${n(a)} × (${n(x)})² = ${n(a*x*x)}.`,['Tính bình phương của x trước, rồi nhân với hệ số a.','Bình phương một số âm là số không âm.',`Thay x = ${n(x)} vào công thức y = ax².`],{a,x});
else if(tier===3){x=i-6;let y=a*x*x;add('NUM',tier,`Đồ thị y = ax² đi qua điểm A(${x}; ${n(y)}). Tính a.`,a,`a = y/x² = ${n(y)}/${x*x} = ${n(a)}.`,['Điểm thuộc đồ thị có tọa độ thỏa mãn y = ax².','Thay hoành độ và tung độ của A vào công thức.','Chia tung độ cho bình phương hoành độ.'],{a,x,y});}
else{let k=i-10;add('NUM',tier,`Một bồn tròn có diện tích S = 3,14r² (m²). Tính S khi bán kính r = ${k} m. Nhập kết quả chính xác theo công thức đã cho.`,3.14*k*k,`S = 3,14 × ${k}² = ${n(Number((3.14*k*k).toFixed(2)))} m².`,['Diện tích tỉ lệ với bình phương bán kính.','Tính r² trước khi nhân với 3,14.',`Thay r = ${k} vào S = 3,14r².`],{k});}
// Coordinates fit the graph exactly, and no free drawing recognition is required.
let ga=[1,-1,2,-2,.5,-.5,1,-1][i%8],gx=[2,-2,1,-1,2,-2,2,-2][i%8],gy=ga*gx*gx;
add('GRA',tier,tier===1?`Đặt điểm A có hoành độ x = ${gx} thuộc đồ thị y = ${f(ga)}.`:tier===2?`A(${gx}; ${n(gy)}) thuộc y = ${f(ga)}. Đặt điểm A′ đối xứng với A qua trục Oy.`:tier===3?`Đồ thị y = ${f(ga)} có điểm với tung độ y = ${n(gy)}. Đặt điểm đó ở bên trái trục Oy.`:`Đồ thị y = ax² đi qua A(1; ${n(ga)}). Xác định a rồi đặt điểm B có hoành độ x = ${gx} trên đồ thị.`,[tier===2?-gx:tier===3?-Math.abs(gx):gx,gy],tier===2?`Đối xứng qua Oy: đổi dấu hoành độ, giữ nguyên tung độ. A′(${ -gx}; ${n(gy)}).`:`Từ y = ${f(ga)}, điểm cần đặt là (${tier===3?-Math.abs(gx):gx}; ${n(gy)}).`,['Điểm (x; y) được xác định bởi hoành độ và tung độ.',tier===2?'Đối xứng qua Oy làm đổi dấu x, không đổi y.':'Tính y = ax²; chú ý bình phương số âm.',tier===3?'Chọn nghiệm x âm vì điểm nằm bên trái Oy.':'Đọc đúng thứ tự: đi ngang theo x, rồi đi dọc theo y.'],{a:ga});
let ex=2+i%3,ea=i%2===0?2:-1,correct=ea*ex*ex;
let steps=i%2===0?[`Thay x = −${ex} vào y = ${f(ea)}.`,`(−${ex})² = −${ex*ex}.`,`y = ${ea} × (−${ex*ex}) = ${-correct}.`]:[`Thay x = −${ex} vào y = ${f(ea)}.`,`(−${ex})² = ${ex*ex}.`,`y = ${ea} × ${ex*ex} = ${Math.abs(correct)}.`];
add('ERR',tier,`Bạn An tính y = ${f(ea)} khi x = −${ex}. Chọn bước SAI ĐẦU TIÊN.`,i%2===0?1:2,`(−${ex})² = ${ex*ex}; y = ${ea} × ${ex*ex} = ${correct}. ${i%2===0?'Sai ở bước bình phương số âm.':'Sai ở dấu của tích: âm nhân dương cho kết quả âm.'}`,['Kiểm tra từng bước theo thứ tự.','Bình phương số âm cho kết quả dương; sau đó mới nhân a.','Phân biệt dấu của x² với dấu của hệ số a.'],{options:steps,correctValue:correct});
}
const mc=[
['Đồ thị y = 3x² có đỉnh ở đâu?',['O(0; 0)','A(0; 3)','B(3; 0)','C(1; 3)'],0,'Đồ thị y = ax² (a ≠ 0) có đỉnh tại gốc tọa độ O.'],
['Trục đối xứng của đồ thị y = −2x² là đường nào?',['Ox','Oy','y = x','x = 2'],1,'Đồ thị y = ax² nhận trục tung Oy làm trục đối xứng.'],
['Hàm số nào có dạng y = ax² với a ≠ 0?',['y = 2x + 1','y = 0x²','y = −3x²','y = x² + 1'],2,'y = −3x² có hệ số a = −3 khác 0.'],
['Hàm số y = −x² xác định với những giá trị x nào?',['Chỉ x ≥ 0','Chỉ x ≤ 0','Chỉ x ≠ 0','Mọi số thực x'],3,'Phép bình phương xác định với mọi số thực x.'],
['Điểm nào thuộc đồ thị y = 2x²?',['(−2; −8)','(−2; 8)','(2; 4)','(0; 2)'],1,'Với x = −2, y = 2 × (−2)² = 8.'],
['Nếu a < 0, với x ≠ 0, điểm trên y = ax² nằm ở đâu?',['Phía trên Ox','Trên Ox','Phía dưới Ox','Trên Oy'],2,'x² > 0 khi x ≠ 0, nên ax² < 0 nếu a < 0.'],
['Hai điểm nào đối xứng nhau qua Oy?',['(2; 4) và (2; −4)','(2; 4) và (−2; −4)','(2; 4) và (4; 2)','(2; 4) và (−2; 4)'],3,'Hai điểm đối xứng qua Oy có hoành độ đối nhau, tung độ bằng nhau.'],
['Với y = −0,5x², giá trị của y tại x = 2 và x = −2 như thế nào?',['Bằng nhau','Đối nhau và khác 0','Luôn dương','Một giá trị bằng 0'],0,'2² = (−2)² nên giá trị hàm số bằng nhau.'],
['Đồ thị y = x² có bao nhiêu điểm có tung độ bằng 9?',['0','1','2','3'],2,'x² = 9 có x = 3 hoặc x = −3, tương ứng hai điểm.'],
['Đồ thị y = −x² có điểm nào có tung độ bằng 4 không?',['Có hai điểm','Có một điểm','Có vô số điểm','Không có'],3,'−x² ≤ 0 với mọi x, nên không thể bằng 4.'],
['Đồ thị y = ax² qua (2; −12). Hệ số a bằng bao nhiêu?',['−3','3','−6','−12'],0,'−12 = a × 2², suy ra a = −3.'],
['Đồ thị y = 2x² có điểm thấp nhất là điểm nào?',['(1; 2)','(0; 0)','(−1; 2)','Không có'],1,'2x² ≥ 0 và bằng 0 khi x = 0.'],
['S = 3,14r². Nếu bán kính tăng gấp 2 thì diện tích tăng gấp mấy lần?',['2','3','4','8'],2,'(2r)² = 4r² nên diện tích tăng gấp 4.'],
['Một vật có s = 5t². Sau 3 giây, vật đi được bao nhiêu mét?',['15 m','30 m','40 m','45 m'],3,'s = 5 × 3² = 45 m.'],
['Dây cáp y = ax² qua (10; 5). Tại x = 20, độ cao y bằng bao nhiêu?',['20','10','15','25'],0,'a = 5/100 = 0,05. Khi x = 20, y = 0,05 × 400 = 20.'],
['V = 4x², x là độ dài cạnh đáy. Nếu x tăng gấp 3 thì V tăng gấp mấy lần?',['3','9','6','12'],1,'(3x)² = 9x² nên V tăng gấp 9.']
];mc.forEach((m,i)=>add('MCQ',Math.floor(i/4)+1,m[0],m[2],m[3],['Nhớ các tính chất của y = ax² và tính bình phương trước.','Nếu liên quan tọa độ, thay x và y vào công thức để kiểm tra.','Đọc kỹ dấu của hệ số a và điều kiện của đề bài.'],{options:m[1]}));
const errors=[
["Một bạn tính y = 2x² tại x = −3. Chọn bước sai đầu tiên.",["Thay x = −3 vào y = 2x².","(−3)² = −9.","y = 2 × (−9) = −18."],1,"(−3)² = 9, nên y = 18. Sai đầu tiên ở bước 2."],
["Một bạn tính y = −x² tại x = −4. Chọn bước sai đầu tiên.",["Thay x = −4 vào y = −x².","(−4)² = 16.","y = −1 × 16 = 16."],2,"Bước 3 sai: −1 × 16 = −16."],
["Một bạn tính y = 3x² tại x = 2. Chọn bước sai đầu tiên.",["y = 3 × 2².","y = (3 × 2)².","y = 36."],1,"Bước 2 sai: chỉ x được bình phương. y = 3 × 4 = 12."],
["Một bạn tính y = 0,5x² tại x = −2. Chọn bước sai đầu tiên.",["(−2)² = 4.","y = 0,5 × 4.","y = 8."],2,"Bước 3 sai: 0,5 × 4 = 2."],
["Một bạn biểu diễn đồ thị y = x². Chọn bước sai đầu tiên.",["Khi x = 2 thì y = 4.","Điểm cần biểu diễn là (4; 2).","Đánh dấu điểm đó trên hệ trục."],1,"Bước 2 đã đảo thứ tự tọa độ. Điểm đúng là (2; 4)."],
["Một bạn tìm điểm đối xứng của A(−2; 4) qua Oy. Chọn bước sai đầu tiên.",["Hai điểm có hoành độ đối nhau.","Hai điểm có tung độ bằng nhau.","Điểm đối xứng là A′(2; −4)."],2,"Bước 3 sai. A′(2; 4): chỉ đổi dấu hoành độ."],
["Một bạn nhận xét đồ thị y = −2x². Chọn bước sai đầu tiên.",["Hệ số a = −2 < 0.","Đỉnh của đồ thị là O.","Với x khác 0, đồ thị nằm phía trên Ox."],2,"Bước 3 sai: a < 0 nên y < 0 khi x khác 0, đồ thị ở phía dưới Ox."],
["Một bạn vẽ y = 2x². Chọn bước sai đầu tiên.",["Đỉnh đồ thị là O(0; 0).","Trục đối xứng là Ox.","Lấy các điểm đối xứng qua Ox để hoàn thiện đồ thị."],1,"Bước 2 sai: trục đối xứng là Oy, không phải Ox."],
["Đồ thị y = ax² đi qua A(2; 12). Chọn bước sai đầu tiên.",["12 = a × 2².","12 = 4a.","a = 12 × 4 = 48."],2,"Bước 3 sai: a = 12 : 4 = 3."],
["Tìm các điểm của y = x² có y = 9. Chọn bước sai đầu tiên.",["Ta có x² = 9.","Suy ra chỉ có x = 3.","Đồ thị chỉ có một điểm thỏa mãn là (3; 9)."],1,"Bước 2 bỏ sót x = −3. Có hai điểm (3; 9) và (−3; 9)."],
["Tìm điểm thuộc y = −x² có y = 4. Chọn bước sai đầu tiên.",["Ta có −x² = 4.","Suy ra x² = −4.","Suy ra x = −2."],2,"Bước 3 sai: bình phương số thực không âm. Không có điểm thỏa mãn."],
["Đồ thị y = 2x² có điểm với y = 8. Chọn bước sai đầu tiên.",["2x² = 8 nên x² = 4.","x = 2 hoặc x = −2.","Hai điểm cần tìm là (2; 8) và (−2; −8)."],2,"Bước 3 sai: hai điểm đều có tung độ 8. Điểm thứ hai là (−2; 8)."],
["Diện tích hình tròn là S = 3,14r². Khi bán kính tăng gấp 2, chọn bước sai đầu tiên.",["Bán kính mới là 2r.","Diện tích mới là 3,14 × (2r)².","Vì (2r)² = 2r² nên diện tích tăng gấp 2."],2,"Bước 3 sai: (2r)² = 4r², diện tích tăng gấp 4."],
["Một vật có quãng đường s = 5t². Tại t = 3 giây, chọn bước sai đầu tiên.",["s = 5 × 3².","s = 5 × 6.","s = 30 m."],1,"Bước 2 sai: 3² = 9, nên s = 45 m."],
["Dây cáp y = ax² đi qua (10; 5). Tính y tại x = 20. Chọn bước sai đầu tiên.",["5 = a × 100 nên a = 0,05.","y = 0,05 × 20².","y = 0,05 × 40 = 2."],2,"Bước 3 sai: 20² = 400, nên y = 20."],
["Thể tích V = 4x² với cạnh đáy x > 0. Khi x tăng gấp 3, chọn bước sai đầu tiên.",["Cạnh đáy mới là 3x.","V mới = 4 × (3x)² = 36x².","Vì vậy thể tích tăng gấp 36 lần."],2,"Bước 3 sai: tỉ số 36x² / (4x²) = 9. Thể tích tăng gấp 9."],
];Bank.filter(q=>q.type==='ERR').forEach((q,i)=>{const e=errors[i];q.prompt=e[0];q.options=e[1];q.answer=e[2];q.solution=e[3];delete q.correctValue;q.hints=['Kiểm tra lần lượt từng bước, tìm lỗi xuất hiện đầu tiên.','Đối chiếu phép tính, thứ tự tọa độ hoặc tính chất đồ thị với kiến thức đã học.','Một bước sai có thể khiến các bước sau sai theo; chọn nguyên nhân đầu tiên.'];});
Bank.filter(q=>q.type==='GRA'&&q.tier===4).forEach(q=>{q.solution=`Vì A(1; ${n(q.a)}) thuộc đồ thị nên a = ${n(q.a)}/1² = ${n(q.a)}. Với x = ${q.answer[0]}, y = ${n(q.a)} × (${q.answer[0]})² = ${n(q.answer[1])}. Điểm B(${q.answer[0]}; ${n(q.answer[1])}).`;q.hints=['Thay tọa độ A vào y = ax² để tìm a.','Hoành độ của A bằng 1 nên a bằng tung độ của A.','Dùng a vừa tìm, tính y theo hoành độ của B rồi đặt điểm.'];});
})();
window.QuestionUtil={numeric(raw){let s=String(raw).trim().replace(/−/g,'-').replace(/,/g,'.').replace(/\s/g,'');if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return Number(s);if(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)\/[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)){let [a,b]=s.split('/').map(Number);return b===0?NaN:a/b;}return NaN;},check(q,v){if(q.type==='NUM')return Number.isFinite(v)&&Math.abs(v-q.answer)<1e-7;if(q.type==='GRA')return Array.isArray(v)&&v.length===2&&v.every((n,i)=>Math.abs(n-q.answer[i])<.01);return v===q.answer;},pick(wave,used){let type=['NUM','GRA','ERR','MCQ'][(wave-1)%4],tier=Math.ceil(wave/3),pool=Bank.filter(q=>q.type===type&&q.tier===tier&&!used.includes(q.id));if(!pool.length)pool=Bank.filter(q=>q.type===type&&q.tier===tier);return pool[Math.floor(Math.random()*pool.length)];}};
