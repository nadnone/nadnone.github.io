import write_list from "../config/sitewrite_list.js"


let terminal = document.querySelector("#write_console")

let current_console_line = 0;

export default function terminal_run()
{
    let text = write_list[current_console_line++];

    let cursor = 0

    let stop_this = setInterval(() => {

        cursor += Math.floor(Math.random() * 3)
    
        let random_tmp = text.slice(0, cursor) 
    
        terminal.innerText = `:~$ ${random_tmp}`
    
        if (random_tmp === text) {
            
            clearInterval(stop_this)
            terminal_run();
        }
        
        if (current_console_line >= write_list.length)
        {
            current_console_line = 1;
        }
    
    }, 250);

  
    
}