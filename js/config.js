'use strict';
window.CFG={teacherPassword:'05067379',maxWave:12,saveKey:'parabola-guardians-v1',regions:[{name:'RỪNG TINH THỂ',color:'#7df3cf',bg:'#11252a',enemy:'#bf7be3',desc:'Quái rừng · đội hình phân tán'},{name:'TÀN TÍCH BĂNG GIÁ',color:'#85c9ff',bg:'#15243a',enemy:'#79bce8',desc:'Dơi băng nhanh · đột kích hai hướng'},{name:'HẺM NÚI DUNG NHAM',color:'#ffae7c',bg:'#301d28',enemy:'#f79a70',desc:'Giáp đá · đội hình tập trung'},{name:'CỔNG HƯ KHÔNG',color:'#c4a0ff',bg:'#241b3b',enemy:'#c8a0ff',desc:'Binh đoàn hỗn hợp · chúa tể bóng tối'}],upgrades:[{name:'Sát thương',icon:'ϟ',desc:'Sức mạnh mỗi viên đạn',base:25},{name:'Tốc độ bắn',icon:'»',desc:'Số phát bắn mỗi giây',base:30},{name:'Máu tối đa',icon:'♥',desc:'Tăng giới hạn & hồi 30 HP',base:25},{name:'Hồi máu',icon:'✚',desc:'HP hồi phục mỗi giây',base:30}],meta:[{name:'Lõi sức mạnh',desc:'+3 sát thương khởi đầu / cấp',base:5},{name:'Thành lũy',desc:'+20 máu khởi đầu / cấp',base:5},{name:'Mạch sinh lực',desc:'+0,3 HP mỗi giây / cấp',base:6},{name:'Kho tiếp tế',desc:'+15 Gold khởi đầu / cấp',base:4}]};

CFG.monsters={
slime:{name:'Slime độc',hp:1,speed:.9,damage:5,size:13,gold:8,color:'#82ed9d'},
bat:{name:'Dơi sấm',hp:.65,speed:1.65,damage:4,size:11,gold:8,color:'#c393ff'},
beetle:{name:'Bọ giáp',hp:1.5,speed:.78,damage:7,size:14,gold:12,color:'#ffce73'},
spider:{name:'Nhện đỏ',hp:.8,speed:1.4,damage:5,size:12,gold:9,color:'#ff879b'},
golem:{name:'Golem đá',hp:2,speed:.65,damage:9,size:18,gold:14,color:'#8dafdd'},
wraith:{name:'U linh',hp:.9,speed:1.25,damage:6,size:13,gold:10,color:'#7de8ee'},
hound:{name:'Khuyển dung nham',hp:1.3,speed:1.15,damage:8,size:15,gold:12,color:'#ffac72'},
boss:{name:'Chúa tể hư không',hp:6,speed:.55,damage:14,size:26,gold:55,color:'#ed98ef'}
};
CFG.towerNames=['Lõi thức tỉnh','Pháo đài lôi quang','Tháp tinh vân','Thành lũy thiên hà','Đế tháp siêu tân tinh'];

// Combat-only tuning; learning tasks and saved player upgrades are unchanged.
CFG.difficulty={name:'THỬ THÁCH',hpBase:1.25,hpPerWave:.07,speedPerWave:.014,damageBase:1.1,damagePerWave:.035,spawnBase:.94,spawnPerWave:.035,spawnMin:.43,eliteFrom:4,eliteEvery:7,eliteHP:1.55,eliteDamage:1.2};
