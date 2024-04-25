# Command Line TODO app


## Built using NodeJS

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

### Packaged Used

- Commander
- chalk@4.2.1
- Conf

## How to install ?

### Prerequisites
 - NodeJS

If not already installed then head over to
https://nodejs.org/en/download/current

and download for your operating system

After successful installation

Move inside the project directory then run

```bash
 $ npm install -g
```

## Examples

```bash
$ todos add "Make new Project"

```

```bash
$ todos list

```
```bash
$ todos markdone -t 0

```
```bash
Usage: todos [options] [command]

Options:
  -h, --help          display help for command

Commands:
  list                List all the tasks
  add <task>          Add a new task
  markdone [options]  Mark a task as completed
  delete [options]    Remove a task from the list
  help [command]      display help for command
```
```bash
$ todos delete -t 0

```
