function findUniqueElements(arr) {
    // Используем объект Set для хранения уникальных элементов
    const uniqueSet = new Set(arr);
    // Преобразуем объект Set обратно в массив
    const uniqueArray = [...uniqueSet];
    return uniqueArray;
}

// Пример использования функции
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueElements = findUniqueElements(array);
console.log("Уникальные элементы:", uniqueElements);

// -- Функция findUniqueElements принимает массив arr. Она использует объект Set для хранения уникальных элементов из массива, а затем преобразует его обратно в массив, содержащий только уникальные элементы, и возвращает этот массив.