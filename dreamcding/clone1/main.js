const toggleBtn=document.querySelector('.navbar__toogleBtn');
const menu=document.querySelector('.navbar__menu');
const icons=document.querySelector('navbar__icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
//버튼이 클릭될 때마다 메뉴나 아이콘의 클래스리트들중에 active클래스를 토글링 하겠다.