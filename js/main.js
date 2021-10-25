// Массив с повторяющимся элементом
const array = ['Nokia', 'iPhone', 'Samsung', 'iPhone', 'Huawei', 'iPhone'];

// Необходимо создать массив, где будут только уникальные элементы
// 1-й вариант:
const uniqArray = [...new Set(array)]; // Оператор спред разложит каждый элемент по отдельности

// 2-й вариант
const uniqArray = Array.from(new Set(array));

// 3-й вариант
const uniqArray = array.filter((item, index) => {
	return index === array.indexOf(item);
}); //

// 4-й вариант с reduce (вызывает callback на каждом элементе)

const uniqArray = array.reduce((uniq, item) => {
	return uniq.includes(item) ? uniq : [...uniq, item];
}, []);
