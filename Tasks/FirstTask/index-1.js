function findMax(arr) {
    // Инициализируем переменную для хранения максимального значения
    let max = arr[0]; // Предполагаем, что первый элемент массива - максимальный

    // Проходим по всем элементам массива
    for (let i = 1; i < arr.length; i++) {
        // Если текущий элемент больше текущего максимального, обновляем максимальное значение
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max; // Возвращаем максимальное значение
}

// Пример использования функции
const numbers = [3, 7, 2, 9, 4];
const maxNumber = findMax(numbers);
console.log("Максимальный элемент в массиве:", maxNumber);

// -- Ход логистической последовательности понимания, и определенный ход действий перед выполнением как вы объясняли Акаи Фатох !
// -- Функция findMax принимает массив чисел arr. 
// -- Она начинает с предположения, что первое число в массиве является максимальным. 
// -- Затем она идет по всем числам в массиве, и если находит число, которое больше текущего максимального, она обновляет максимальное значение. 
// -- В конце функция возвращает это максимальное число. 