const container = document.querySelector('.container')
const newTaskInput = document.querySelector('.newTask-input')
const tasks = document.createElement('ul')
container.append(tasks)

const removeTask = (task) => {
    task.remove()
}

const defolt = document.createElement('p')
defolt.className = 'defolt'
defolt.textContent = 'There are no tasks !'
tasks.append(defolt)

let cnt = 1
// добавляем задачи
const addButton = document.querySelector('.add')
addButton.addEventListener('click', () => {

    if (newTaskInput.value === '') {
        alert('Напишите задачу')
    } else {
        cnt = cnt + 1
        const task = document.createElement('li')
        task.className = 'task'
        task.innerHTML = `
            <p class="task-name"> <span>task-${cnt}:</span> ${newTaskInput.value}</p>
            <div class="block">
                <button class="delete">remove</button>
                <input class="check" type="checkbox"></input>
            </div>
        `
    tasks.append(task)

    // удаляем надпись нет задач
    if (task) {
        defolt.remove(defolt)
    }
    }
    /* cnt = cnt + 1
    const task = document.createElement('li')
    task.className = 'task'
    task.innerHTML = `
        <p class="task-name"> <span>task-${cnt}:</span> ${newTaskInput.value}</p>
        <div class="block">
            <button class="delete">remove</button>
            <input class="check" type="checkbox"></input>
        </div>
    `
    tasks.append(task) */


    const checks = document.querySelectorAll('.check');
    const textTasks = document.querySelectorAll('.task-name');
    checks.forEach((check, index) => {
        check.addEventListener('change', () => {
            if (check.checked) {
                textTasks[index].classList.add('done');
            } else {
                textTasks[index].classList.remove('done');
            }
        });
    });

    // удаляем надпись нет задач
    /* if (task) {
        defolt.remove(defolt)
    } */

    const removeButtons = document.querySelectorAll('.delete')
    removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', () => {
            const taskToRemove = removeButton.closest('.task')
            removeTask(taskToRemove)
            // добавляем надпись нет задач
            if (tasks.innerHTML === '') {
                tasks.append(defolt)

            }
        })
    })

})




/* 
c = 0
alert('hello')
const hello = prompt()
if (hello === 'привет') {
    c = c + 1
} 
alert('world')
const world = prompt()
if (world === 'мир') {
    c = c + 1
}
alert('красный')
const red = prompt()
if (red === 'красный') {
    c = c + 1
}
if (c >= 2) {
    alert('отлично')
} else {
    alert('попробуй ещё раз')
} */
