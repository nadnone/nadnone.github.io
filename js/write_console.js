import write_list from "../config/sitewrite_list.js"


let terminal = document.querySelector("#write_console")


function terminal_run()
{
        
    let rand = Math.floor(Math.random() * (write_list.length - 1))

    let random_text = write_list[rand];

    let cursor = 0

    let stop_this = setInterval(() => {

        let rand_char = Math.floor(Math.random() * 3)

        cursor += rand_char
    
        let random_tmp = random_text.slice(0, cursor) 
    
        terminal.innerText = random_tmp
    
        if (random_tmp === random_text) clearInterval(stop_this)
    
    }, 250);

  
    
}

terminal_run()
setInterval(terminal_run, 6000)