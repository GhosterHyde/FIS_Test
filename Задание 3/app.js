var bookID = 1;
var personID = 1;

function hardcore_reader(){
    //Заполнение "таблиц" исходными данными 
    var books = [new Book('Война и мир'), new Book('Горе от ума'), new Book('Сказка о царе Салтане')];
    var persons = [new Person('Данил'), new Person('Артем')];
    var rentas = [new Renta(books[0], persons[1]), new Renta(books[1], persons[0]), new Renta(books[2], persons[0])];
    var max = 0;
    //Создание словаря людей и количества прочитанных ими книг
    var rentaCount = [];
    for (let i = 0; i < persons.length; i++){
        rentaCount.push({
            key: persons[i],
            value: 0
        });
    }
    //Заполнение словаря
    for (let i = 0; i < rentas.length; i++){
        rentaCount[rentas[i]]++;
    }
    //Поиск максимума читаемых книг
    for (let i = 0; i < rentas.length; i++){
        if (rentaCount[i] > max){
            max = rentaCount[i];
        }
    }
    //Отсев людей, которые прочитали максимум книг
    var hardcoreReadersID = {};
    var readersIDCount = 0;
    for (let i = 0; i < rentas.length; i++){
        if (rentaCount[i] === max){
            hardcoreReadersID[readersIDCount++] = rentaIDCount[i].personID;
        }
    }
    //Запись имен людей по ID, которые являются 'злостными читателями'
    var hardcoreReaders = {};
    var readersCount = 0;
    for (let i = 0; i < hardcoreReadersID.length; i++){
        for (let j = 0; j < persons.length; j++){
            if(hardcoreReadersID[i] == persons[j].id){
                hardcoreReaders[rentaCount++] = persons[j].name;
            }
        }
    }
    //Возврат списка 'злостных читателей'
    return hardcoreReaders;
}

class Book{
    constructor(naming){
        this.id = bookID++;
        this.naming = naming;
    }
}

class Renta{
    constructor(bookID, personID){
        this.bookID = bookID;
        this.personID = personID;
    }
}

class Person{
    constructor(name){
        this.id = personID++;
        this.name = name;
    }
}