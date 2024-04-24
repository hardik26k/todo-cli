#! /usr/bin/env node

import {program} from 'commander'
import list from './commands/list.js'
import add from './commands/add.js'
import markDone from './commands/markDone.js'
import deleteTask from './commands/delete.js'


program
    .command('list')
    .description('List all the tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new task')
    .action(add)

program
    .command('markdone')
    .description('Mark a task as completed')
    .option('-t or --task <tasks...>','Specify the id of the task to marked as completed')
    .action(markDone)

program
    .command('delete')
    .description('Remove a task from the list')
    .option('-t or --task <task> Specify the id of the task to be deleted')
    .action(deleteTask)


program.parse()