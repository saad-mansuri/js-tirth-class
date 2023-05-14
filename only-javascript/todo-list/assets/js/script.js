'use strict'
let taskArr = []
var updateIndex = -1

function btntaskSubmit(event) {
    event.preventDefault()

    // alert()
    let task_title = taskTitle.value
    let task_desc = taskDesc.value

    let storetaskArr = {
        Title: task_title,
        Description: task_desc
    }
    // task_title == "" || task_desc == ""
    if (updateIndex < 0) {
        if (task_title == "" || task_desc == "") {
            validMsg.style.display = "block"
            validMsg.style.color = "red"
            // taskTodohead.style.display="none"
            // console.log("please enter value")
        } else {
            taskArr.push(storetaskArr)
            console.log(taskArr)
            validMsg.style.display = "none"
            taskTodohead.style.display = "block"
            // taskTodotable.innerHTML += `<tr>
            //     <td>${task_title}</td>
            //     <td>${task_desc}</td>
            //     <td><button class="btn btn-danger">Delete</button></td>
            // </tr>`
        }
    }else{
        taskArr[updateIndex] = storetaskArr
        updateIndex = -1
        taskSubmit.value = "Submit"
    }
    taskAdd()
    // console.log(taskArr)
    taskTitle.value = ""
    taskDesc.value = ""
    // console.log(task_title,task_desc)
}
// console.log(taskArr[i]["Title"])
function taskAdd() {
    taskTodotable.innerHTML = ""
    for (var i = 0; i < taskArr.length; i++) {
        taskTodotable.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${taskArr[i]["Title"]}</td>
            <td>${taskArr[i]["Description"]}</td>
            <td><button class="btn btn-danger" onClick="btntaskDelete(${i})">Delete</button></td>
            <td><button class="btn btn-success" onClick="btntaskEdit(${i})">Edit</button></td>
        </tr>`
    }
}

function btntaskDelete(e) {
    // console.log(e)
    taskArr.splice(e, 1)
    if (taskArr.length == 0) {
        taskTodohead.style.display = "none"
    } else {
        taskAdd()
    }
}

function btntaskEdit(e) {
    taskSubmit.value = "Update"
    // taskArr[e]["Title"]
    // taskArr[e]["Description"]

    taskTitle.value = taskArr[e]["Title"]
    taskDesc.value = taskArr[e]["Description"]
    console.log(taskArr[e]);
    console.log(taskTitle.value);
    console.log(taskArr[e]["Description"]);

    updateIndex = e

    // console.log(task_title.value, task_desc.value)
    // alert()
}