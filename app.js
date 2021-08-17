const question = '日本最南端の島はどれでしょう';
const answers = ['択捉島', '沖の鳥島', '南鳥島', 'トゥイシ'];
const correctAnswer = '南鳥島';

//HTMLに上の問題を読み込ませる。
document.getElementById('question').textContent = question;

const $button =  document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

//正解ボタンを押した際のロジックを書く

$button[0].addEventListener('click', ()=>{
    if(correctAnswer === $button[0].textContent){
        window.alert('正解');

    }else{
        window.alert('不正解');
    }});

//ロジックとしては、addeventlistenerのなかで、描き切っている。

$button[1].addEventListener('click', ()=>{
    if(correctAnswer === $button[1].textContent){
        window.alert('正解');

    }else{
        window.alert('不正解');
    }});

    $button[2].addEventListener('click', ()=>{
        if(correctAnswer === $button[2].textContent){
            window.alert('正解');
    
        }else{
            window.alert('不正解');
        }});

    $button[3].addEventListener('click', ()=>{
        if(correctAnswer === $button[3].textContent){
            window.alert('正解');
    
        }else{
            window.alert('不正解');
        }});