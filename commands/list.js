import Conf from 'conf'
import chalk from 'chalk'


const config = new Conf({projectName: "TODO-CLI"})

function list(){
    var taskList = config.get('todo-tasks')

    if (taskList && taskList.length){
        console.log(
            chalk.green("Tasks in green color are marked-done")
        )
        console.log(
            chalk.yellow("Tasks in yellow color are pending")
        )

        taskList.forEach((task, index) => {
            if(task.done){
                console.log(
                    chalk.green.bold(`${index}. ${task.text}`)
                )
            }else{
                console.log(
                    chalk.yellow(`${index}. ${task.text}`)
                )
            }
        });

    } else {
        console.log(
            chalk.red.bold("You don\'t have any task...")
        )
    }
}


export default list;