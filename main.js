let task_input = document.querySelector(".container-task .new-task input");
let add_btn = document.querySelector(".container-task .new-task .plus-task");
let task_msg = document.querySelector(".container-task .task-content .no-task-msg");
let task_content = document.querySelector(".container-task .task-content");
let task_count = document.querySelector(".task-stats .task-count span");
let task_completed = document.querySelector(".task-stats .task-completed span");

window.onload = function() {
    task_input.focus();
};



add_btn.onclick = function() {
    if(task_input.value === '')
    {
        alert("No task have been entered");
    }
    else
    {
        task_msg.remove();

        let task_span = document.createElement("span");
        let delete_span = document.createElement("span");

        let task_txt = document.createTextNode(task_input.value);
        let delete_txt = document.createTextNode("Delete");

        task_span.appendChild(task_txt);
        delete_span.appendChild(delete_txt);


        task_span.className = "task-box";
        delete_span.className = "delete";

        task_span.appendChild(delete_span);
        task_content.appendChild(task_span);

        task_input.value  = '';

        task_input.focus();

        calctasks();

    }
}


var input = document.getElementById("add-task-ip");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add-task-span").click();
  }
});




document.addEventListener("click", function(e) {
    if(e.target.className == 'delete')
    {
        e.target.parentNode.remove();

        if(task_content.childElementCount == 0)
        {
            createNoTaskMsg();
        }
    }


    if(e.target.classList.contains("task-box"))
    {
        e.target.classList.toggle("finished");
    }

    calctasks();
});


function createNoTaskMsg() {
    let msg_span = document.createElement("span");
    let msg_txt = document.createTextNode("No task added");
    msg_span.appendChild(msg_txt);
    msg_span.className = "no-task-msg";
    task_content.appendChild(msg_span);
}


function calctasks() {
    task_count.innerHTML = document.querySelectorAll(".task-content .task-box").length;
    task_completed.innerHTML = document.querySelectorAll(".task-content .finished").length;
}






