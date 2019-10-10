

 let money = prompt( "Ваш бюджет на месяц?", ''),
     time = prompt( "Введите дату в фотмате YYYY-MM-DD", '');

let appData = {
    budget : money,
    expenses:{},
    optionalExpenses: {},
    income:[],
    timeData: time,
    saving: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ' '),
     a2 = prompt(" Во сколько обойдется?", ' '),
     a3 = prompt("Введите обязательную статью расходов в этом месяце", ' '),
     a4 = prompt("Во сколько обойдется", ' ');


 

 for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ' '),
        b = prompt(" Во сколько обойдется?", ' '),

    appData.expenses[a] = b;    
 }
 alert(appData.budget / 30);

 

