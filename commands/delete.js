import Conf from 'conf'
import chalk from 'chalk'

function deleteTask(id){
    const config = new Conf({projectName: "TODO-CLI"})
    let taskList = config.get('todo-tasks')

    if(!taskList || id-1 > taskList.length){
        console.log(
            chalk.bgGrey.white("You do not have any tasks")
        )
    }else{
        taskList.splice(id,1)
    }

    config.set('todo-tasks', taskList)
}

export default deleteTask