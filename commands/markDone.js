import Conf from 'conf'
import chalk from 'chalk'

function markDone({tids}){
    const config = new Conf({projectName: "TODO-CLI"})
    let taskList = config.get('todo-tasks')

    taskList = taskList.map((task,index) => {
        if(taskList){
            if(tids){
                if(tids.indexOf(index.toString) !== -1){
                    task.done = !task.done
                }
            }else{
                task.done = !task.done
            }
        }

        return task
    })

    config.set('todo-tasks', taskList)
    console.log(chalk.green("Done..."))
    console.log(tids)
}

export default markDone;