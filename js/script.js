const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
button.addEventListener( 'click', add);

function add(){
const today = new Date().toLocaleDateString("pt-br").slice(0,-5);
const dayExists = nlwSetup.dayExists(today);

if(dayExists){
    alert("Dia já incluso 🎈")
    return;
}
alert("Dia adicionado com sucesso 😎 " + today);
nlwSetup.addDay(today);
}
/* const data = {
    run:['01-01','01-02','01-05'],
    water:['01-01', '01-03','01-05'],
    food:['01-02', '01-05','01-06'],
} */
nlwSetup.setData(data)
nlwSetup.load()