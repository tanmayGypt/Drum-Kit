// document.querySelector(".w").addEventListener("keypress",()=>{
//     var audio=new Audio("./sounds/snare.mp3");
//     audio.play();

// });

var size = document.querySelectorAll("button").length;

for (var i = 0; i < size; i++) {

    document.querySelectorAll("button")[i].addEventListener("keypress", (event) => {

        switch (event.key) {
            case 'w':
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 'a':
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 's':
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 'd':
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 'j':
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 'k':
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;
            case 'l':
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                var activebutton = document.querySelector("." + event.key);
                activebutton.classList.add("pressed");
                setTimeout(() => {
                    activebutton.classList.remove("pressed");
                }, 100);
                break;

        }


    });


}

// for (var j = 0; j < size; j++) {
//     var clicked = document.querySelectorAll("button")[j].innerHTML;
//     document.querySelectorAll("button")[j].addEventListener("click", () => {

//         switch (clicked) {
//             case 'w':
//                 var audio = new Audio("./sounds/snare.mp3");
//                 audio.play();
                
//                 break;
//             case 'a':
//                 var audio = new Audio("./sounds/tom-1.mp3");
//                 audio.play();
                
               
//                 break;
//             case 's':
//                 var audio = new Audio("./sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case 'd':
//                 var audio = new Audio("./sounds/kick-bass.mp3");
//                 audio.play();
               
//                 break;
//             case 'j':
//                 var audio = new Audio("./sounds/tom-3.mp3");
//                 audio.play();
                
//                 break;
//             case 'k':
//                 var audio = new Audio("./sounds/tom-4.mp3");
//                 audio.play();
               
//                 break;
//             case 'l':
//                 var audio = new Audio("./sounds/crash.mp3");
//                 audio.play();
                
//                 break;

//         }


//     });


// }

