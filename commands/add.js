
import Conf from 'conf'
import chalk from 'chalk'


let date = new Date()
const config = new Conf({projectName: "TODO-CLI"})

function add(task){
    let taskList = config.get('todo-tasks')

    if(!taskList){
        taskList = []
    }

    taskList.push({
        text: task,
        done: false,
        createdAt: date.toLocaleString()
    })

    config.set('todo-tasks', taskList)
    console.log(
        chalk.green.bold("New Task added successfully...")
    )
}

export default add;