function binarySearch(arr, target) {
    let left = 0; // Левая граница массива
    let right = arr.length - 1; // Правая граница массива

    // Пока левая граница не превышает правую
    while (left <= right) {
        // Находим середину массива
        let mid = Math.floor((left + right) / 2);
        // Если средний элемент равен целевому, возвращаем его индекс
        if (arr[mid] === target) {
            return mid;
        }
        // Если средний элемент больше целевого, сдвигаем правую границу
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        // Если средний элемент меньше целевого, сдвигаем левую границу
        else {
            left = mid + 1;
        }
    }
    // Если элемент не найден, возвращаем -1
    return -1;
}

// Пример использования функции
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetNumber = 7;
const index = binarySearch(sortedArray, targetNumber);
console.log(`Индекс числа ${targetNumber} в массиве:`, index);

// -- Функция binarySearch принимает отсортированный массив чисел и число, которое нужно найти в массиве. Она использует метод бинарного поиска, чтобы искать число в массиве. Она сужает диапазон поиска вдоль массива до тех пор, пока не находит число или пока границы не сомкнутся. Если число найдено, функция возвращает его индекс в массиве, иначе возвращает -1.