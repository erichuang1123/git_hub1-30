let reserve_select_arr = [
    {
       city : '臺北市',
        area : [
            '松山區',
            '信義區',
            '大安區',
            '中山區',
            '中正區',
            '大同區',
            '萬華區',
            '文山區',
            '南港區',
            '內湖區',
            '士林區'
        ]
    },
    {
            city : '基隆市',
            area :[
                  '中正區',
                  '信義區',
                  '仁愛區',
                  '中山區',
                  '安樂區',
                  '暖暖區',
                  '七堵區'
                ]
    },
    {
            city : '新北市',
            area :[
                '板橋區',
                '三重區',
                '中和區',
                '永和區',
                '新莊區',
                '新店區',
                '土城區',
                '蘆洲區',
                '樹林區,',                
                '汐止區',
                '鶯歌區',
                '三峽區',
                '淡水區',
                '瑞芳區',
                '五股區',
                '泰山區',
                '林口區',
                '深坑區',
                '石碇區',
                '坪林區',
                '三芝區',
                '石門區',
                '八里區',
                '平溪區',
                '雙溪區',
                '貢寮區',
                '金山區',
                '萬里區',
                '烏來區' 
            ]
    },
    {
            city : '宜蘭縣',
            area :['頭城鎮',
                   '礁溪鄉',
                   '員山鄉',
                   '宜蘭市',
                   '壯圍鄉',
                   '大同鄉',
                   '三星鄉',
                   '羅東鎮',
                   '五結鄉',
                   '冬山鄉',
                   '蘇澳鎮',
                   '南澳鄉'
                ]
    },
    {
            city : '新竹市',
            area :[]
    },
    {
            city : '新竹縣',
            area :[
                '竹北市',
                '竹東鎮',
                '新埔鎮',
                '關西鎮',
                '新豐鄉',
                '峨眉鄉',
                '寶山鄉',
                '五峰鄉',
                '橫山鄉',
                '北埔鄉',
                '尖石鄉',
                '芎林鄉',
                '湖口鄉',
            ]
    },
    {
            city : '桃園市',
            area :[]
    },
    {
            city : '苗栗縣',
            area :[]
    },
    {
            city : '臺中市',
            area :[]
    },
    {
            city : '彰化縣',
            area :[]
    },
    {
            city : '南投縣',
            area :[]
    },
    {
            city : '嘉義縣',
            area :[]
    },
    {
            city : '雲林縣',
            area :[]
    },
    {
            city : '台南縣',
            area :[]
    },
    {
            city : '高雄市',
            area :[]
    },
    {
            city : '南海諸島',
            area :[]
    },
    {
            city : '澎湖縣',
            area :[]
    },
    {
        city : '屏東縣',
        area :[]
    },
    {
        city : '臺東縣',
        area :[]
    },
    {   
        city : '花蓮縣',
        area :[]
    },
    {
        city : '金門縣',
        area :[]
    },
    {
        city : '連江縣',
        area :[]
    }
]
// from表單
const reserve_select = document.querySelector('.reserve_select');
const reserve_select_area = document.querySelector('.reserve_select_area');
let txt = '';
let areaTxt = '';
function reserve_selectFn(){     
    reserve_select_arr.forEach(item=>{
        txt += `<option>${item.city}</option>`;
    })
    reserve_select.innerHTML = txt;
}
reserve_selectFn();
reserve_select.addEventListener('change',function(){
    reserve_select_arr.forEach(item=>{
        if(reserve_select.value == item.city){
            areaTxt = '';
            item.area.forEach(el=>{
                areaTxt += `<option>${el}</option>`;
            })
        }
    })
    reserve_select_area.innerHTML = areaTxt;
})
// 圖片滑動
const aboutItem = [...document.querySelectorAll('.about_item')];
let ev;
let number = 0;
aboutItem.forEach(function(e){
        if(e.querySelector('.prev') == null && e.querySelector('.next') == null) return;
        const prev = e.querySelector('.prev');
        const next = e.querySelector('.next');
        prev.addEventListener('click',function(){
                ev = e;
                prevHandler(e);
        });
        next.addEventListener('click',function(){
                ev = e;
                nextHandler(e);
        });
})
let obj = {index:0};
let newIndex = new Proxy(obj,{
        get(target,key){
                return target[key];
        },
        set(target,key,value){
                target[key] = value;
                const pic = ev.querySelectorAll('.pic img');
                const point = ev.querySelectorAll('.point div')
                let dataNumber = pic[value].dataset['transform'];
                // console.log(value);
                pic.forEach(function(e){
                        e.style.transform = `translate(-${dataNumber}%)`;
                })
                point.forEach(function(e){
                        e.classList.remove('active');
                })
                point[value].classList.add('active');
        }
})
aboutItem.forEach(function(e){
      ev = e;
      newIndex.index = 0;
})
function prevHandler(event){
        const pic = event.querySelectorAll('.pic img');
        if(number <= 0){
                number = pic.length -1;
        }else{
                number--;
        }
        newIndex.index = number;
}
function nextHandler(event){
        const pic = event.querySelectorAll('.pic img');
        if(number < pic.length-1){
                ++number;
        }else{
                number = 0;
        }
        newIndex.index = number;
}