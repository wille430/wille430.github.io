
import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const run = () =>{
    console.log('Running');
}


window.onload = () => {
    console.log('Window Loaded!');

    var buttons = document.querySelectorAll('#page_icon_select');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function onclick(event){
            console.log(event.target.getAttribute('id') + ' was clicked');
            for (var o = 0; o < buttons.length; o++){
                buttons[o].classList.remove("fas");
                buttons[o].classList.add("far");
            }
            event.target.classList.remove("far");
            event.target.classList.add("fas");
        })
    };

    var taskbtns = document.querySelectorAll('#task-btn');
    for (var i = 0; i < taskbtns.length; i++){
        taskbtns[i].addEventListener("click", function onclick(event){
            if (event.target.getAttribute('completed') == "false"){
                console.log("Task completed");
                event.target.setAttribute('completed', "true");
                event.target.classList.remove("far");
                event.target.classList.add("fas");
            }
        });
    }

    var addbtns = document.querySelectorAll('.addbtn');
    for (var i = 0; i < addbtns.length; i++){
        addbtns[i].addEventListener("click", function onclick(event){
            console.log("Add btn");
        });
    }

    var tasks = document.querySelectorAll('.tasklist');
    for (var i = 0; i < tasks.length; i++){
        tasks[i].addEventListener("dragover", function allowDrop(event){
            event.preventDefault();
        });
        tasks[i].addEventListener("drop", function drop(event){
            event.preventDefault();
            var data = event.dataTransfer.getData("text",);
            event.target.appendChild(document.getElementById(data));
        });
        for (var o = 0; o < tasks[i].children.length; o++){
            if (tasks[i].children[o].classList == 'task'){
                tasks[i].children[o].addEventListener("dragstart", function drag(event){
                    console.log('Drag started');
                    event.dataTransfer.setData("text", event.target.id);
                });
            }
        }
       
    }
}

