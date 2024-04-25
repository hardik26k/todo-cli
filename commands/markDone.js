import Conf from 'conf'
import chalk from 'chalk'


const config = new Conf({ projectName: "TODO-CLI" })
let taskList = config.get('todo-tasks')

function markDone({ tasks }) {

    if (taskList) {
        taskList = taskList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    task.done = !task.done
                }
            } else {
                task.done = !task.done
            }
            return task
        })
    }

    config.set('todo-tasks', taskList)
    console.log(chalk.green("Done..."))
    console.log(tasks)
}

export default markDone;