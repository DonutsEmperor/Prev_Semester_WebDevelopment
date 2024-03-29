function calculatePi(numPoints) {
    let insideCircle = 0;
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 2 - 1; // Генерация случайной координаты x в диапазоне [-1, 1]
        const y = Math.random() * 2 - 1; // Генерация случайной координаты y в диапазоне [-1, 1]

        if (x ** 2 + y ** 2 <= 1) {
            insideCircle++;
        }
    }
    const pi = (4 * insideCircle) / numPoints;
    return pi;
}

const numPoints = 1000000; // Количество случайных точек для эксперимента
const result = calculatePi(numPoints);
console.log("Приблизительное значение числа Пи:", result);


// Этот код генерирует заданное количество случайных точек в квадрате со стороной 2 и подсчитывает, сколько из них попадает вписанный круг. Затем программа использует формулу π = 4 * (количество точек, попавших в круг) / (общее количество точек) для вычисления приблизительного значения числа "Пи".

// Если у вас есть конкретные требования к степени точности или другие ограничения, уточните их, чтобы я мог предоставить более подходящий пример кода.