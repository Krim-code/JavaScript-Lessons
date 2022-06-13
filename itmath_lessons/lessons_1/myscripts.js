class Lesson_1 {
    constructor(number) {
        this.number = number;
    }
    MapFunction(array) {
        array = this.Sort_array(array)
        if (this.number in array && this.number != '') {
            let str = "Exercice_"
            str = 'this.' + str + String(this.number) + '()';
            eval(str)
        } else {
            let asc = confirm("Вы ввели неверное значение, такого упражнения не существует!\n Повторите ввод!")
            if (asc == true) {
                location.reload()
            }
        }

    }
    Sort_array(array) {
        let second_array = []
        for (let i in array)
            if (array[i].indexOf('Exercice_') != -1) {
                array[i] = Number(array[i].replace('Exercice_', ''));
                second_array.push(array[i]);
            }
        return second_array;
    }

    Exercice_1() {
        let a = prompt("Please input number")
        for (let i = 0; i <= a; i++) {
            console.log("#".repeat(i));
        }
    }

    Exercice_2() {
        let a = prompt("Please input number")
        let k = 0
        let sharp = "#"
        let empy_block = " "
        for (let i = 0; i < a; i++) {
            let temp = (sharp + empy_block).repeat(a)
            if (k % 2 == 0) {
                console.log(temp)
            } else {
                temp = temp.split("").reverse().join("")
                console.log(temp)
            }
            k += 1;
        }
    }

    Exercice_3() {
        let a = prompt("Please input first argument");
        let b = prompt("Pleae  input second argument");


        let A = [a, b]
        console.log("minimal element is:" + Math.min(...A))
    }
}
number = prompt('Input number exercice: ')
Lesson_1 = new Lesson_1(number)
Lesson_1.MapFunction(Object.getOwnPropertyNames(Lesson_1.__proto__));