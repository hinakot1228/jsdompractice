// Q1
let text1= document.getElementById('text1');
console.log(text1.textContent);

// Q2
let text2 = document.getElementById('text2');
text2.innerHTML = '<p>変更しました</p>';

// Q3
let text3 = document.getElementById('text3');
text3.style.color = 'red';

// 4
let textGroup1 = document.getElementsByClassName('textGroup1');
for(let i = 0; i < textGroup1.length; i++){
    textGroup1.item(i).style.color = 'red';
}

// 5
// let textGroup2 = document.getElementsByClassName('textGroup2');
// for (let i = 0; i < textGroup2.length; i++) {
//     textGroup2.item(i).style.backgroundColor = 'pink';
// }
let textGroup2 = document.getElementsByClassName('textGroup2');
for (let i = 0; i < textGroup2.length; i++) {
    textGroup2.item(i).style.backgroundColor = 'pink';
}

// 6
// let aList = document.getElementsByTagName('a');
// for (let i = 0; i < aList.length; i++){
//     let a = aList.item(i);

//     if(a.textContent === 'Google'){
//         a.href = 'https://www.google.com';
//     }else if(a.textContent === 'YouTube'){
//         a.href = 'https://www.youtube.com';
//     }else if(a.textContent === 'Yahoo'){
//         a.href = 'https://www.yahoo.co.jp/';
//     }
// }

let aList = document.getElementsByTagName('a');
for (let i = 0; i < aList.length; i++) {
    let a = aList.item(i);
    if(a.textContent == 'Google') {
        a.href = 'https://www.google.com';
    } else if (a.textContent == 'YouTube') {
        a.href = 'https://www.youtube.com';
    } else if (a.textContent == 'Yahoo') {
        a.href ='https://www.yahoo.co.jp/';
    }
}

// 7
// let text4 = document.querySelector('#text4');
// text4.style.fontSize = '35px';
let text4 = document.getElementById('text4');
text4.style.fontSize = '35px';

// 8
// let textGroup3 = document.querySelectorAll('.textGroup3');
// for (text of textGroup3){
//     text.style.backgroundColor = 'skyblue';
// }
let textGroup3 = document.getElementsByClassName('textGroup3');
for(let i = 0; 0 < textGroup3.length; i++) {
    textGroup3.item(i).style.backgroundColor = 'skyblue';
}

// 9
let child1 = document.getElementById('child1');
let div = child1.parentElement;
div.style.backgroundColor = 'lightgreen';

// let child1 = document.getElementById('child1');
// let div = child1.parentElement;
// div.style.backgroundColor = 'lightgreen';


// 10
let box1 = document.getElementById('box1');
let pList = box1.children;
for (p of pList){
    p.style.backgroundColor = 'orange';
}