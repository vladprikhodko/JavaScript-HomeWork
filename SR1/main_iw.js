

    var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);

// Максимальное и минимальное значение.

    var max = arr[0];
    var min = max;

    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(max);
    console.log(min);

// Сумма всех элементов массива.

    var sum = 0;
    for (var i = 0; i<arr.length; i++) {
        sum += arr[i];
    }   
    console.log (sum);

// Среднее арифметическое значение

    var sum = 0;
    var arithmetic;
    for (var i = 0; i<arr.length; i++) {
        sum += arr[i];
        arithmetic = sum / arr.length;
    }   
    console.log (arithmetic);



    

