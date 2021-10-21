/*  -----------------------------------------------------------------------------------------------
1.Введение в Javascript

JavaScript – это интерпретируемый мультипарадигмальный
язык программирования.

Что можно писать с помощью JS:
● Сайты, как Front-end так и Back-end
● Браузерные игры
● Реализация полноценных WebApp.

Структура веб-приложения
● HTML
● CSS
● JS
● + бек-енд





Как подключить Javascript?
1. JS код добавляем прямо в
index.html в <body>:
    <script>
        alert("Hello World!")
    </script>
2. JS код подключаем по ссылке на файл в
index.html в <head>:
    <script src="script.js"></script>

Правила подключения JS скрипта:
● Скрипты вставляются на страницу как текст в
теге <script>, либо как внешний файл через
<script src="путь"></script>
● HTML5 не требует обязательного указания
атрибута type, пример: type="text/javascript".
● Чтобы подключить несколько скриптов,
используйте несколько тегов.
● Специальные атрибуты async и defer
используются для того, чтобы пока грузится
внешний скрипт – браузер показал остальную
часть страницы. Без них этого не происходит
● Разница между async и defer: атрибут defer
сохраняет относительную последовательность
скриптов, а async – нет.
● Скрипт с defer сработает, когда весь HTML-
документ будет обработан браузером.
● Атрибуты async/defer – только для внешних
скриптов.





Переменные в JavaScript
● Переменная – это поименованная область памяти
компьютера.
● Переменные объявляются с использованием
ключевого слова var, let
● Константы с помощь const
● Переменная может состоять из A-Z, a-z, 0-9, _, $,
  не может начинаться с цифры.

camelCase           userName
snake_case          user_name





Консоль
Вывод в консоль в JS осуществляется через
команду console.log(“Hello World!”);
Для открытия консоли разработчика
необходимо нажать F12 или выбрать в
контекстном меню “Inspect”.
В консоль можно выводить несколько значений через запятую.





Типы данных в Javascript
● number – тип обозначающий как целые так и дробные числа,
а также специальные числовые значения (Inﬁnity, NaN).
● string – тип обозначающий строку.
● boolean - тип определяющий всего два значения, true и false.
● null – специальное значение  являющееся типом object.
● undeﬁned – тип определяющий одно значение, undeﬁned.
● object – тип определяющий переменную как некий объект /
сущность.

typeof – оператор / функция позволяющая узнать тип переменной.





Взаимодействие с пользователем

alert(аргумент) – принимает один аргумент и выводит
на экран окно с сообщением и приостанавливает
выполнение скрипта, пока пользователь не нажмет «ОК».

prompt(title, default) – принимает два аргумента
‘заголовок’ и ’строка по умолчанию’ соответственно и
выводит модальное окно с заголовком title, полем для
ввода текста, заполненным строкой по умолчанию
default и кнопками «OK»/«CANCEL». Вызов prompt
возвращает то, что ввел посетитель – строку или
специальное значение null, если ввод отменён.

conﬁrm(question) – выводит окно с вопросом question
с двумя кнопками: «OK» и «CANCEL».
---------------------------------------------------------------------------------------------------
*/









/* тест с подсчетом баллов */
/*
let count = 0;

let test1 = prompt("Сколько будет 3+2?");
if (test1 == 5) {
    ++count;
}

let test2 = prompt("Сколько будет 3-2?");
if (test2 == 1) {
    ++count;
}

let test3 = prompt("Сколько будет 3+3?");
if (test3 == 6) {
    ++count;
}

// alert("Вы набрали " + count + " баллов");

if (count == 0) {
    alert("Увы, все неправильно!");
} else if (count == 1) {
    alert("Вы набрали " + count + " бал");
} else {
    alert("Вы набрали " + count + " бала");
}
*/








/*
let userName = prompt("Введите Ваше имя");
let pass = prompt("Введите Ваш пароль");

if (userName == "admin" && pass == "1234") {
    alert("Вы можете войти");
} else {
    alert("Увы, Вы не можете войти");
}
*/








/* Написать программу, которая спрашивает у пользователя эмейл, имя,
телефон, пароль и согласие на обработку данных (confirm).
По проверкам: "согласие на обработку данных" должно быть только true,
остальные можно проверять по длине строки (в эмейле, телефоне и пароле должно быть
не меньше 4 символов, в имени не меньше 3).
Следующий вопрос должен появятся после предыдущего, если условие было выполнено.
В конце вывести сообщение "Вы успешно зарегистрированы!" или ошибку в зависимости
от того в каком месте условие было неверным.
Пример: "Имя не может быть короче 3 символов"/"Имя введено не верно".
Тем, кто уже знает циклы сделать чтоб запрос ввода каждого значения повторялся пока
значение не будет введено корректно.*/
/*
let email = prompt('Введите Ваш e-mail');
    while (email.length < 4) {
        email = prompt('e-mail не может быть короче 4 символов, введите, пожалуйста, еще раз');
    };

let userName = prompt('Введите Ваше имя');
    while (userName.length < 3) {
        userName = prompt('Имя не может быть короче 3 символов, введите, пожалуйста, еще раз');
    };

let phone = prompt('Введите Ваш номер телефона');
    while (phone.length < 4) {
        phone = prompt('Номер телефона не может быть короче 4 символов, введите, пожалуйста, еще раз');
    };

let pass = prompt('Введите Ваш пароль');
    while (pass.length < 4) {
        pass = prompt('Пароль не может быть короче 4 символов, введите, пожалуйста, еще раз');
    };

let agree = confirm('Вы согласны на обработку данных?');
    if (agree) {
        alert(userName + ', Вы успешно зарегистрированы!');
    } else {
        alert('Вам нужно дать согласие на обработку данных, пожалуйста, попробуйте еще раз');
    };
*/











/* ------------------------------------------------------------------------------------------------

2.Основы JavaScript

Функции:
1. alert()
2. conﬁrm(‘text’)
3. prompt(‘Как тебя зовут?”, “Аноним” )
4. console.log(“ПОМОГИТЕ НАС ДЕРЖАТ В ПОДВАЛЕ И ЗАСТАВЛЯЮТ
   ПИСАТЬ КОД!”)
   




Операторы JS:
=   -   +   *   /

==      сравнение по значению
===     сравнение по значению и типу

>   <   <=  >=

&&      и
||      или

x++     x--     ++x     --x

!       не
!=      не равно по значению
!==     не равно по значению и типу
*/








/* Вывести на экран с помощью функции alert сумму, разность,
произведение и частное двух заранее определенных чисел.*/
/*
let num1 = 2;
let num2 = 8;

alert(num1+num2);
alert(num1-num2);
alert(num1*num2);
alert(num1/num2);
*/








/* Используя конструкцию if..else, напишите
код, который получает число через prompt, а
затем выводит в alert:
● 1, если значение больше нуля,
● -1, если значение меньше нуля,
● 0, если значение равно нулю.
Предполагается, что пользователь вводит
только числа */
/*
let num = prompt("Введите число");

if (num > 0) {
    alert("1");
}

if (num == 0) {
    alert("0");
}

if (num < 0) {
    alert("-1");
}
*/








/* Используя конструкцию if..else. Написать
программу которая будет спрашивать у
пользователя: «Вы хотите ввести имя или
фамилию? Если имя – нажмите ОК. Если
фамилию Отмена». И на основании ответа,
выводит модальное окно предлагающее
ввести имя или фамилию.  После чего
выводит сообщение соответственно:  «Ваше
имя …», «Ваша фамилия …» */
/*
let check = confirm("Если Вы хотите ввести имя нажмите ОК, а если фамилию - ОТМЕНА");

if (check) {
    let firstName = prompt("Введите Ваше имя")
    alert("Ваше имя " + firstName);
} else {
    let lastName = prompt("Введите Вашу фамилию")
    alert("Ваша фамилия " + lastName);
}
*/








/* Написать программу для расчета суммы двух чисел введенных пользователем. */
/*
let num1 = prompt("Введите 1-е число");     // 5
let num2 = prompt("Введите 2-е число");     // 8

alert(num1 + num2);     // 58
*/








/*  -----------------------------------------------------------------------------------------------
Явное и неявное преобразование типов

Всего есть три преобразования:
1. Строковое преобразование.
2. Численное преобразование.
3. Преобразование к логическому значению.

● Строковое преобразование происходит, когда
требуется представление чего-либо в виде строки.
Например, его производит функция alert.
    let a = true;
    alert( a ); // "true”

Можно также осуществить преобразование явным
вызовом String(val):
    alert( String(null) === "null" ); //true

Как видно из примеров, преобразование происходит наиболее
очевидным способом, «как есть»:
false становится "false", null – "null",
undefined – "undefined" и т.п.

Также для явного преобразования применяется оператор "+",
у которого один из аргументов строка. В этом случае он приводит
к строке и другой аргумент, например:
    alert( true + "test" ); // "truetest"
    alert( "123" + undefined ); //"123undefined"
---------------------------------------------------------------------------------------------------
*/







/* Выведете значение переменной типа Number в виде текста
1) с помощью функции alert()
2) с помощью функции console.log() */
/*
let num = 8;
alert(String(num));
console.log(String(num));
*/








/*  -----------------------------------------------------------------------------------------------
● Численное преобразование происходит в математических
функциях и выражениях.
Для преобразования к числу в явном виде можно вызвать
Number(val), либо, что короче, поставить перед выражением
унарный плюс "+":
    let a = +"123"; // 123
    let a = Number("123"); // 123, тот же эффект

underfined      Преобразуется в...      NaN
null                                    0
true/false                              1 / 0
строка          Пробельные символы по краям обрезаются.
                Далее, если остается пустая строка, то 0, иначе
                "считывается" число, при ошибке результат NaN.

    alert( +" 123  " ); // 123
    alert( +true ); // 1
    alert( +false ); // 0
---------------------------------------------------------------------------------------------------
*/








/* Написать программу для расчета суммы двух чисел введенных пользователем. */
/*
let num1 = +prompt("Введите 1-е число");    // 5
let num2 = +prompt("Введите 2-е число");    // 8

alert(num1 + num2);     // 13
*/








/*  -----------------------------------------------------------------------------------------------
● Преобразование к true/false происходит в логическом
контексте, таком как if(value), и при применении
логических операторов.
Все значения, которые интуитивно «пусты», становятся
false. Их несколько: 0, пустая строка, null, undefined и
NaN.
Остальное, в том числе и любые объекты – true.

Полная таблица преобразований:
undefined, null     Преобразуется в...  false
Числа                                   true, кроме 0,NaN -- false
Строки                                  true, кроме пустой строки "" -- false
Объекты                                 true

Для явного преобразования используется двойное логическое
отрицание !!value или вызов Boolean(value).

    alert( !!"0" );     // true
    alert( !!" " );     // любые непустые строки, даже из пробелов - true!

    true + false        // 1
    8 / "2"             // 4
    "number" + 5 + 1    // number51 ("number"5 + 1)
    5 + 1 + "number"    // 6number  (6 + "number")
    null + 1            // 1 (0+1=1)
    undefined + 1       // NaN      (NaN + 1)
    'true' == true      // false    (NaN == 1 => false)
    false == 'false'    // false    (0 == NaN => false)
    null == ''          // false
---------------------------------------------------------------------------------------------------
*/








/*  -----------------------------------------------------------------------------------------------
Условные инструкции:

if(выражение для проверки){
  инструкции
}

If(выражение для проверки){
  инструкции
} else {
   инструкции
}

тернарный оператор:  [ условие 1 ]?[ инструкции 1 ] : [ инструкции 2 ];
---------------------------------------------------------------------------------------------------
*/








/*
// Выведется ли alert?
if ("0") {                  // "0" -- не пустая строка -- true
    alert('Привет');
}
*/







/* Перепишите if с использованием условного оператора '?':
    let result;
    let a = 1; let b = 2;
    if (a + b < 4) {
        result = 'Мало';
    } else {
        result = 'Много';
    };
    alert(result);
*/
/*
let a = 1;
let b = 2;
let result = a + b < 4 ? 'Мало' : 'Много';
alert(result);
*/








/*Написать код, который будет
выводить максимум из ДВУХ чисел.*/
/*
let a = 13; let b = 8;

if (a > b) {
    alert(a);
} else {
    alert(b);
}

// a > b ? alert(a) : alert(b);     // c использ. тернарного оператора
*/








/*Написать код, который будет
выводить максимум из ТРЁХ чисел.*/
/*
let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
    alert(a);
} else if (b > a && b > c) {
    alert(b);
} else {
    alert(c);
}

// (a > b && a > c) ? alert(a) :
//     (b > a && b > c) ? alert(b) :
//         alert(c);                   //c использ. тернарного оператора
*/








/* Написать программу, которая запрашивает у
пользователя число соответствующее дню недели
и возвращающую строку в alert(), с словесным названием
дня недели (понедельник, вторник, и т.д.). */
/*
let dayWeek = +prompt('Введите день недели', '4');
switch (dayWeek) {
    case 1:
        alert('понедельник');
        break;
    case 2:
        alert('вторник');
        break;
    case 3:
        alert('среда');
        break;
    case 4:
        alert('четверг');
        break;
    case 5:
        alert('пятница');
        break;
    case 6:
        alert('суббота');
        break;
    case 7:
        alert('воскресенье');
        break;
    default:
        alert('Нет такого дня недели...')
}
*/








/*  -----------------------------------------------------------------------------------------------
switch(x) {
  case 1:               // if (x === 1)
    ...
    break;
  case 'value2':        // if (x === 'value2')
    ...
    break
  default:
    ...
    break;
}

Алгоритм работы
● Переменная x проверяется на строгое
равенство первому значению value1, затем
второму value2 и так далее.
● Если соответствие установлено – switch
начинает выполняться от соответствующей
директивы case и далее, до ближайшего
break (или до конца switch).
● Если ни один case не совпал – выполняется
(если есть) вариант default.

Группировка
let a = 2 + 2;
switch (a) {
  case 4:
    alert('Правильно!');
    break;
  case 3:               // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;
  default:
    alert('Результат выглядит странновато. Честно.');
}
---------------------------------------------------------------------------------------------------
*/








/* Перепишите код с использованием одной конструкции switch:
let a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
} */
/*
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
}
*/








/*  Напишите калькулятор, который вначале запрашивает у
пользователя знак (+, -, *, /), затем два числа.
После чего выводит их значение с помощью функции alert(). */
/*
let sign =  prompt('Введите знак +, -, *, /', '+');
let num1 = +prompt('Введите 1-ое число', '7');
let num2 = +prompt('Введите 2-ое число', '3');

switch (sign) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    default:
        alert('Ошибка, попробуйте еще раз')
}
*/








/* Написать конвертер валют. Позволяющий
выбрать из доллара(USD), евро(EUR), гривны
(UAH) и конвертировать соответственно в
доллар, евро или гривну.
1. Показать окно спрашивающее тип валюты,
которую хотим конвертировать.
2. Показать окно спрашивающее тип валюты в
которую хотим конвертировать.
3. Вывести результат перевода из одной
валюты в другую, сообщив оба типа валют (из
чего во что  1000 гривен = 250$).*/
/*
let currency1 = prompt('Введите тип валюты, которую конвертировать USD, EUR, UAH', 'UAH');
let currency2 = prompt('Введите тип валюты, в которую конвертировать USD, EUR, UAH', 'USD');
let uah = '1000 гривен',
    usd = '40$',
    eur = '30€';

switch (currency1) {
    case 'UAH':
        switch (currency2) {
            case 'USD':
                alert(`${uah} = ${usd}`);
                break;
            case 'EUR':
                alert(`${uah} = ${eur}`);
        }
        break;
    case 'USD':
        switch (currency2) {
            case 'UAH':
                alert(`${usd} = ${uah}`);
                break;
            case 'EUR':
                alert(`${usd} = ${eur}`);
        }
        break;
    case 'EUR':
        switch (currency2) {
            case 'USD':
                alert(`${eur} = ${usd}`);
                break;
            case 'UAH':
                alert(`${eur} = ${uah}`);
        }
        break;
    default:
        alert('Ошибка, попробуйте еще раз');
}
*/








/* Написать конвертер валют. Позволяющий выбрать из доллара (USD),
евро (EUR), гривны (UAH) и конвертировать соответственно в доллар, евро
или гривну.
1.Курс  задает пользователь через prompt;
2.Показать  результат,  сообщив оба типа валют и результат.
3.Во время выполнения задания использовать конструкции if(){}else{} и
switch(){case{}} */
/*
let currency1 = prompt('Введите тип валюты, которую конвертировать USD, EUR, UAH', 'USD');
let currency2 = prompt('Введите тип валюты, в которую конвертировать USD, EUR, UAH', 'UAH');
let amount = +prompt('Введите конвертируемую сумму', '100');
let exchangeRate = +prompt('Введите обменный курс', '30');
let result = amount * exchangeRate;

if (currency1 !== currency2) {
    switch (currency1) {
        case 'USD':
        case 'EUR':
        case 'UAH':
            switch (currency2) {
                case 'USD':
                case 'EUR':
                case 'UAH':
                    alert(`${amount} ${currency1} = ${result} ${currency2}`);
            }
            break;
        default:
            alert('Возникла ошибка, попробуйте еще раз');
    }
} else {
    alert('Возникла ошибка, попробуйте еще раз');
}
*/








/* У провайдера интернета есть следующие 
пакеты: базовый (скорость 100 MB/s), премиум 
(скорость 150 MB/s + бесплатное подключение) 
и VIP (скорость 300 MB/s + бесплатное 
подключение и спутниковое TV в подарок). 
Стоимость пакетов 200, 250 и 300 гривен 
соответственно. Написать программу, которая 
предлагает пользователю выбрать пакет и 
вывести стоимость и услуги, которые 
пользователь получит после подключения. */
/*
let choice = prompt('Выберите пакет: базовый, премиум или VIP', 'VIP');
let price = 200;
let speed = 100;
let bonus = '';

switch (choice) {
    case 'VIP':
        price += 50;
        speed += 150;
        bonus += ' и спутниковое TV в подарок';
    case 'премиум':
        price += 50;
        speed += 50;
        bonus += ' + бесплатное подключение';
    case 'базовый':
        alert(`Стоимость пакета "${choice}" - ${price} гривен (скорость ${speed} MB/s ${bonus})`);
        break;
    default:
        alert('Возникла ошибка, попробуйте еще раз');
}
*/








/* Стоимость разговора. Пользователь указывает цену одной 
минуты исходящего звонка с одного мобильного оператора 
другому, а также, продолжительность разговора. Необходимо 
вычислить денежную сумму на которую был произведен звонок. */
/*
let price = +prompt('Введите цену одной минуты исходящего звонка');
let duration = +prompt('Введите продолжительность разговора');

alert(`Стоимость разговора составляет ${price * duration} гривен`);
*/








/* Проверка кратности. Написать программу, которая 
предлагает пользователю ввести число и определяет кратно 
ли оно 3.*/
/*
let num = +prompt('Введите число');

if (num % 3 === 0) {
    alert('Число кратно 3');
} else {
	alert('Число не кратно 3');
}
*/








/* Температура тела. Пользователь вводит температуру.
Ему показывают сообщение о состоянии организма. Больше 41 
или меньше 35 – труп, меньше 36.6 – упадок сил, больше 37 – 
болен, в промежутке 36,6 – 37 – здоров. */

let bodyTemperature = +prompt('Введите температуру тела');

if (bodyTemperature > 41 || bodyTemperature < 35) {
    alert('труп :(');
} else if (bodyTemperature < 36.6) {
    alert('упадок сил');
} else if (bodyTemperature > 37) {
    alert('болен');
} else {
    alert('здоров');   
}










/*  -----------------------------------------------------------------------------------------------
1. Что такое Javascript?
2. Какие функции взаимодействия с пользователем вы знаете?
3. Для чего  нужна функция  console.log()?
4. Какие типы данных есть в JS?
5. Когда происходит неявное преобразование типов?
6. Какие команды вызывают явное преобразование типов? 
7. Какие условные операторы вы знаете?
8. Как обозначить логическое И? ИЛИ?
9. Для чего нужен  switch?
10. Как будет вести себя switch  если не писать break?
11. Как коротко записать a=a+1?
12. Чем отличается a=1 и a==1? a==1 и a===1?
---------------------------------------------------------------------------------------------------
*/
