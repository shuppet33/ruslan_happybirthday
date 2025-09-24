import {modalGameState, modalState} from "./state.js";
import {drawScene} from "./index.js";


export const taskBox = {
    box1: [
        {
            text: 'Вычислите определитель матрицы:',
            img: 'img/tasks/math/1.jpg',
            answer: '2', // 2
            state: false
        },
        {
            text: 'Вычислите интеграл:',
            img: 'img/tasks/math/2.jpg',
            answer: '3', // 3
            state: false
        },
        {
            text: 'Найдите предел: ',
            img: 'img/tasks/math/3.jpg',
            answer: '2', // 2
            state: false
        },
        {
            text: 'Найдите предел:',
            img: 'img/tasks/math/4.jpg',
            answer: '1',
            state: false
        },
        {
            text: 'Вычислите интеграл:',
            img: 'img/tasks/math/5.jpg',
            answer: '8', // 8
            state: false
        },
        {
            text: 'В урне 3 белых и 2 черных шара. Сколькими способами можно выбрать 2 шара так, чтобы оба были белыми?',
            img: '',
            answer: '3', // 3
            state: false
        },
        {
            text: 'МОЛОДЧИНКА!! Вот и первый сундочок открыт.  <br> <br> Теперь у тебя есть кодовое слово — скажи его преподавателю и получи заслуженный подарок. <br> <br>👉 Кодовое слово: « <span style="color: red">Эшкере</span> »',
            img: '',
            answer: '',
            state: null,
        },
    ],

    box2: [
        {
            text: 'Нужен код от преподавателя.',
            img: '',
            answer: 'rm-rf/',
            state: false
        },
        {
            text: 'Молодец! <br> <br>Шутка: <br> <br> Почему в Linux нет кнопки «Отмена»? Потому что всё делается через rm -rf /. <br> <br> ',
            img: '',
            answer: '',
            state: null
        }
    ],

    box3: [
        {
            text: 'Задача 1 — Строка: фильтрация символов. Нужно удалить из строки все не-буквенные символы, привести к нижнему регистру и вернуть склеенную строку букв. <br> <br> <span style="color: blue">function <span style="color: red">decodeStringFilterLetters <span style="color: black">( input: <span style="color: orange">string</span>) <span style="color: orange">string</span></span></span></span> <br> <br> Входные данные: <br> <br> <span style="color: blue"> const <span style="color: black"> data = <span style="color: green">"H1a2p3p4y5B6i7r8t9h0d1a2y"</span></span></span>',
            img: '',
            answer: 'happybirthday',
            state: false
        },
        {
            text: 'Задача 2. Объект — сортировка и фильтр. Напиши функцию <span style="color: blue">decodeObject ( data )</span>, которая принимает объект, где ключи — это слова, а значения — числа. Нужно вернуть массив, содержащий только числа больше 2, в порядке добавления. <br> <br> Входные данные: <br> <br> <span style="color: blue">const <span style="color: black"> data = \{ <span style="color: red">first</span>: <span style="color: red">3</span>, <span style="color: red">second</span>: <span style="color: red">5</span>, <span style="color: red">third</span>: <span style="color: red">1</span>, <span style="color: red">fourth</span>: <span style="color: red">0</span>  \} </span></span>',
            img: '',
            answer: '[3,5]', //[3,5]
            state: false
        },
        {
            text: 'Задача 3. Строка — фильтр, перестановка и сдвиг символов. Напиши функцию <span style="color: blue">decodeString ( data )</span>, которая принимает строку, зашифрованную шифром Цезаря со сдвигом -3. Нужно расшифровать строку и вернуть полученное сообщение в нижнем регистре. <br> <br>' +
                'Входные данные: ' +
                '<br> <br>' +
                '<span style="color: blue">const <span style="color: black"> data = </span> <span style="color: green"> "kulwkdubfli" </span></span>',
            img: '',
            answer: 'birthdaygift', // birthdaygift
            state: false
        },
        {
            text: 'Задача 4. Вложенный объект — фильтр, сортировка, объединение. Напиши функцию <span style="color: blue">decodeObject ( data )</span>, которая принимает объект, где значения — это объекты с текстом и числом weight. Нужно отсортировать фразы по возрастанию weight и вернуть массив этих фраз в правильном порядке. Но тут не все так просто... Слова зашифрованы!<br> <br>' +
                'Входные данные: ' +
                '<br> <br>' +
                '<span style="color: blue">const <span style="color: black"> data = \{ <br> ' +
                '<span style="color: red">phrase1</span> \{ <span style="color: red">text</span>: <span style="color: green">"x phqd"</span>, <span style="color: red">weight</span>: <span style="color: red">1</span> \}, <br> ' +
                '<span style="color: red">phrase2</span> \{ <span style="color: red">text</span>: <span style="color: green">"rw wdegd wuvdxfvw"</span>, <span style="color: red">weight</span>: <span style="color: red">3</span> \}, <br>' +
                '<span style="color: red">phrase2</span> \{ <span style="color: red">text</span>: <span style="color: green">"rw wdegb"</span>, <span style="color: red">weight</span>: <span style="color: red">2</span> \}, <br>' +
                ' \} </span></span>',
            img: '',
            answer: '["у меня","от тебя","руки трясутся"]', // ["у меня","от тебя","руки трясутся"]
            state: false
        },
        {
            text: 'Задача 5. Строки — сдвиг Цезаря + перестановка. Напиши функцию <span style="color: blue">decodeString ( data , shifts )</span>, которая принимает массив строк и массив чисел. Каждая строка зашифрована шифром Цезаря, а число указывает на сдвиг. Нужно расшифровать каждое слово и соединить их вместе в одну строку.<br> <br>' +
                'Входные данные: ' +
                '<br> <br>' +
                '<span style="color: blue">const <span style="color: black"> data = [ <span style="color: green">"pdnh"</span>, <span style="color: green">"dzvkl"</span> ] </span> </span> <br>' +
                '<span style="color: blue">const <span style="color: black"> shifts = [ <span style="color: red">1</span>, <span style="color: red">-4</span> ] </span> </span> <br>',
            img: '',
            answer: 'makeawish', // makeawish
            state: false
        },
        {
            text: 'Задача 6. Число — фильтр и перестановка цифр. Напиши функцию  <span style="color: blue">decodeNumber ( data )</span>, которая принимает число, оставляет только четные числа, сортирует их в порядке возрастания и возвращает новое число. <br> <br>' +
                'Входные данные: ' +
                '<br> <br>' +
                '<span style="color: blue">const <span style="color: black"> data = <span style="color: red">591482637</span> </span> </span>',
            img: '',
            answer: '2468', // 2468
            state: false
        },
        {
            text: 'Молодец!!! <br> <br> Ты разгадал все шифры и доказал, что замки преподавателя тебе нипочём. <br> <br> Скажи кодовое слово — « <span style="color: red">Алохомора</span> » — и получи свой подарок.',
            img: '',
            answer: '',
            state: null
        }
    ]
}

export function modalGame(box) {

    const modal = document.getElementById(box.name)
    const text = modal.querySelector('.box__content__text')
    const img = modal.querySelector('img')
    const input = modal.querySelector('input')
    const checkButton = modal.querySelector('.check')
    const closeButton = modal.querySelector('.close')
    const nextButton = modal.querySelector('.next-array')

    const checkWrapper = modal.querySelector('.box__content__check')

    let currentTask = 0

    renderTask()


    checkButton.addEventListener('click', (e) => {
        const task = taskBox[box.name][currentTask]

        if (input.value.replace(/\s/g, '') === task.answer) {
            task.state = true
            nextButton.classList.remove('hidden')
        } else {
            input.classList.add('error')
            setTimeout(() => input.classList.remove('error'), 3000)
        }
    })

    nextButton.addEventListener('click', (e) => {
        const task = taskBox[box.name][currentTask]

        currentTask++
        if (currentTask < taskBox[box.name].length) {
            renderTask()
        }
    })


    function renderTask() {
        const task = taskBox[box.name][currentTask]

        input.value = ''
        nextButton.classList.add('hidden')
        checkWrapper.classList.remove('hidden')
        closeButton.classList.add('hidden')

        text.innerHTML = task.text
        img.src = task.img

        if (task.state === null) {
            checkWrapper.classList.add('hidden')
            closeButton.classList.remove('hidden')
            return
        }
    }


}

export function openModal(box) {

    const modalBox = document.getElementById(box.name)
    const overlay = document.getElementById('overlay')
    const closeButton = modalBox.querySelector('.close')

    closeButton.removeEventListener('click', closeModal)

    if (modalGameState[box.name] === true) {
        return
    }

    modalBox.classList.remove('hidden')
    overlay.classList.remove('hidden')
    modalState[box.name] = true

    closeButton.addEventListener('click', closeModal)


    function closeModal(event) {
        modalBox.classList.add('hidden')
        overlay.classList.add('hidden')
        modalGameState[box.name] = true
        modalState[box.name] = false

        drawScene();
    }

}

