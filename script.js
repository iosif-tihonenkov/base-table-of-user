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

function addCub() {
    /**
     * Это значит, что если хотя бы одно поле пустое
     * в isNotNull запишется пустое значение. Если будет пустое, 
     * то тогда операция добавления не пройдет
     */
    let isNotNull = userName.value && userSoName.value && Number(userAge).value;

    //Проверяем, что нет ни одного пустого поля инпут

    if (isNotNull) {
        //Создаем объект типа User
        let newUser = new User(
            userName.value,
            userSoName.value,
            userAge.value
        );
        /**
         * Будем использовать id объекта из массива для 
         * дочерних элементов селектора
         */
        let 
    }
}