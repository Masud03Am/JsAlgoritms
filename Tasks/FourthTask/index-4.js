function isPalindrome(str) {
    // Убираем все пробелы из строки и приводим все символы к нижнему регистру
    const formattedStr = str.toLowerCase().replace(/ /g, "");

    // Переворачиваем строку
    const reversedStr = formattedStr.split("").reverse().join("");

    // Сравниваем исходную строку с перевернутой
    return formattedStr === reversedStr;
}

// Пример использования функции
const testString = "radar";
const isPal = isPalindrome(testString);
console.log(`Строка "${testString}" ${isPal ? "является" : "не является"} палиндромом.`);

// -- Функция isPalindrome принимает строку str. Она убирает пробелы и приводит все символы к нижнему регистру. Затем она переворачивает строку и сравнивает ее с исходной. Если строки равны, то функция возвращает true, иначе - false.