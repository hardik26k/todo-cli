#! /usr/bin/env node

import {program} from 'commander'
import list from './commands/list.js'
import add from './commands/add.js'
import markDone from './commands/markDone.js'



program
    .command('list')
    .description('List all the tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new task')
    .action(add)

program
    .command('markDone')
    .description('Mark a task as completed')
    .option('-t or --task <tasks...> Specify the id of the task to marked as completed')
    .action(markDone)


program.parse()