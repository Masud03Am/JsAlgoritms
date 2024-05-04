function reverseWords(str) {
    // Разделяем строку на слова, разделитель - пробел
    const words = str.split(" ");
    // Обращаем массив слов и объединяем его обратно в строку с пробелами
    const reversedStr = words.reverse().join(" ");
    return reversedStr;
}

// Пример использования функции
const inputString = "Это пример строки";
const reversedString = reverseWords(inputString);
console.log("Строка с обратным порядком слов:", reversedString);

// -- Функция reverseWords принимает строку str. Она разделяет эту строку на слова, используя пробел в качестве разделителя. Затем она меняет порядок слов на обратный и объединяет их обратно в строку с пробелами.