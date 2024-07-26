// document.getElementById('btn').addEventListener('click', () => {
//     console.log('начало');
//     setTimeout(()=> {
//         console.log('прошло 2 секунды');
//         setTimeout(() => {
//             console.log('прошло итого 3');
//         }, 1000)
//     }, 2000)
// });

document.getElementById('btn').addEventListener('click', () => {
    console.log('начало');
    setTimeout(()=> {
        console.log('прошло 1 секунды');
        
    }, 1000)
    const inter = setInterval(() => {
        console.log('прошло 2 сек');
    }, 2000)
    setInterval(() =>{
        clearInterval(inter);
        console.log('прошло итого 10');
    }, 10000)
});

