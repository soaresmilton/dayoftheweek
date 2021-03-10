let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch (dayOfWeekNumber) {
    case 0:
        nameOfDay = 'Domingo';
        quote = 'Domingueira! Dia de relaxar. 😎';
        break;
    case 1:
        nameOfDay = 'Segunda-Feira';
        quote = 'Segundona braba! Bora começar bem a semana!';
        break;
    case 2:
        nameOfDay = 'Terça-feira';
        quote = 'Uuuuu bora que bora!';
        break
    case 3:
        nameOfDay = 'Quarta-feira';
        quote = 'Meio da semana! Hoje é foda';
        break;
    case 4:
        nameOfDay = 'Quinta-feira';
        quote = 'Ahnhhhhhh quase fim de semana!!';
        break
    case 5:
        nameOfDay = 'Sexta-feira';
        quote = 'Sextou BB! Hj nem GPS localiza';
        break
    case 6:
        nameOfDay = 'Sábado';
        quote = 'Sabadouuuuuuuuuuuuuu'
        break;
}


let weekDayDiv = document.getElementById('weekday');
weekDayDiv.innerHTML = `${nameOfDay}`;

let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`;