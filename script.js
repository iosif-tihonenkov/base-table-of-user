let userArray = [];

/**
 * Функция-конструктор
 * для объектов типа User
 * @param n
 * @param sn 
 * @param a 
 * @constructor
 */

function User (n, sn, a) {
    this.uName = n;
    this.uSoName = sn;
    this.uAge = a;
}

/**
 * Функция, для добавления объектов типа User в массив userArray
 * Обновляет элементы селектора с id -- selectCub
 */

function userAdd() {
    /**
     * Это значит, что если хотя бы одно поле пустое
     * в isNotNull запишется пустое значение. Если будет пустое, 
     * то тогда операция добавления не пройдет
     */
    let isNotNull = userName.value && userSoName.value && Number(userAge.value);

    //Проверяем, что нет ни одного пустого поля инпут

    if (isNotNull) {
        //Создаем объект типа User
        let newUser = new User(
            userName.value,
            userSoName.value,
            userAge.value,
        );
        /**
         * Будем использовать id объекта из массива для 
         * дочерних элементов селектора
         */
        let id = userArray.length;
        //Добавляем новый элемент в массив
        userArray.push(newUser);

        //Создаем дочерний элемент селектора -- строка выпадающего списка
        let opt = document.createElement("option");
        /**
         * value позволит в дальнейшем идентифицировать выбранный элемент селектора
         * в данном случае будет соответствовать индексу в массиве
         */
        opt.value = String(id);
        //Текст - то, что увидит пользователь в выпадающем списке
        opt.text = newUser.uName;
        //Теперь к элементу документа мы добавили новый дочерний элемент
        selectUser.appendChild(opt);

        //Сотрем ненужный текст в input-ax в случае успеха
        userName.value = '',
        userSoName.value ='',
        userAge.value = '';

    } else {
        //Если не все поля заполнены - вызываем alert окно
        alert("Вы ввели не все значения. Так же убедитесь, что Возраст это число ");
    }
}
/**
 * Функция вывода в html данных пользователя
 * @param anyArray - массив с данными, которые будем отображать;
 * @param targTable - элемент HTML в котором мы разместим нашу таблицу
 */

function printUserTable(anyArray, targTable) {
    //Чистим данные таблицы от старой таблицы
    let oldTable = document.getElementById('tableRemovable');
    //Если таблица не пустая - чистим её
    if (oldTable) {
        targTable.removeChild(oldTable);
    }

    //Создать элемент таблица
    let tableRes = document.createElement('table');
    //Строка индекса
    let rawIndex = document.createElement('tr');
    //Строка имени
    let rawName = document.createElement('tr');
    //Строка фамилии
}

