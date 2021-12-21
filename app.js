const colors =['red','lightgreen','rgba(133,100,220)','#f15025']

const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    const RandomNumber=getRandNumber();
    console.log(RandomNumber);

    document.body.style.backgroundColor=colors[RandomNumber];
    color.textContent=colors[RandomNumber];
})

const getRandNumber = () =>{
    return Math.floor(Math.random()*colors.length)
}