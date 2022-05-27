var list={
    "todoList":
    [
        {
        "taskBlock": "Home", "tasks":
        [
            {"task": "Clean room", "done": false},
            {"task": "Get storage unit", "done": false}
        ]
        },
        {
        "taskBlock": "Work", "tasks":
        [
            {"task": "Analysis", "done": false},
            {"task": "Sorting", "done": false, "subtasks":
            [
                {"task": "Save files", "done": false, "subtasks":
                [
                    {"task": "Pull from computer 1", "done": false},
                    {"task": "Walk to computer 2", "done": false},
                    {"task": "Save on computer 2", "done": false}
                ]
                },
                {"task": "Sort files", "done": false},
                {"task": "Plot data", "done": false}
            ]
            }
        ]
        }
    ]
   }

var task_block = document.getElementById('task-block');
for(var i=0;i<list['todoList'].length;i++){
    task_block.innerHTML+='<option value="'+i+'">'+list['todoList'][i].taskBlock+'</option>';
}

function tasks(){
    var task_block = document.getElementById('task-block');
    var tasks=document.getElementById('tasks');
    for(var i=0;i<task_block.length;i++){
        for(var j=0;j<list['todoList'][i].tasks.length;i++){
            if(task_block.options[i+1].selected){
                task_block.innerHTML+='<option value="'+i+'">'+list['todoList'][i].taskBlock+'</option>';
            }
        }
    }
}