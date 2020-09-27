const numbers = new Array(12)
    .fill(null)
    .map((_,i) => {
        return i === 0 ? 12 : i;
    });

const radius = 150;
const segment = (360/12) * (Math.PI/180);

bigC.innerHTML = numbers.map((n, i) => {
    const x = Math.cos((segment*i) - (Math.PI/2)) * radius;
    const y = Math.sin((segment*i) - (Math.PI/2)) * radius;
    return `<span class='numbers' style='transform: translate(${x}px, ${y}px)'>${n}</span>`
})
.join('');
// console.log(numbers)

sec.style.transformOrigin = '50% 50%';
min.style.transformOrigin = '50% 50%';
hr.style.transformOrigin = '50% 50%';

sec.style.zIndex = '10';
min.style.zIndex = '10';
hr.style.tzIndex= '10';

setInterval(()=>{
    const date = new Date();
    const secRot = date.getSeconds()*6;
    const minRot = date.getMinutes()*6;
    const hrRot = date.getHours()*30;

    const addForMin =((360/60)/60)*date.getSeconds();
    const addForHr =((360/12)/60)*date.getMinutes();


    sec.style.transform = `rotate(${secRot}deg)`;
    min.style.transform = `rotate(${minRot+addForMin}deg)`;
    hr.style.transform = `rotate(${hrRot+addForHr}deg)`;
}, 1000)