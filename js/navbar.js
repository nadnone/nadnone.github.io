import { menu_id, menu_index } from "../config/menu.js"

function navbar() {

    let logo_navbar = document.querySelector(".navbar.logo")
    let navbar_items = document.querySelectorAll(".navbar.items")
    
    logo_navbar.classList.add("spin")

    for (const menu in menu_index) {
        let item = document.createElement("div")
        item.classList.add("navbar")
        item.classList.add("items")

        item.innerText = menu

        item.addEventListener("click", (event) => {
            
            let target = event.target.innerText;
            cometo(target);

        });

        logo_navbar.appendChild(item)
    }

    
    navbar_items.forEach((item) => {

        //item.classList.toggle("show_navbar");
        //item.classList.toggle("visible");
        
        item.addEventListener("click", (event) => {
            
            let target = event.target.innerText;
            cometo(target);


        });
    
    })
       
    
}

function open_tab()
{
    //document.querySelector(".scroller").classList.add("display_block");
    document.documentElement.classList.add("scroll_active");
    window.scrollTo(0,0)
}

function cometo(where)
{
    where = where.toLowerCase();

    const choosed = menu_id[menu_index[where]];
    
    for (let i = 0; i < menu_id.length; i++) {

        let other = document.querySelector(`#${menu_id[i]}`)

        if (choosed !== other.id)
        {   
            other.classList.remove("come_back")

            setTimeout(() => {
                other.style.display = ""
            }, 1500)
        }
        
    }

    let div = document.querySelector(`#${choosed}`);
    div.style.display = "flex";

    setTimeout(() => {
        div.classList.add("come_back");
    }, 1500);




    // spin because this is funny to see ma face spinning 
    switch(choosed)
    {
        case "gallery":
            document.querySelector("#contact .picture").classList.toggle("spin");
            open_tab();
            break;

        case "timeline":
            document.querySelector("#contact .picture").classList.toggle("spin");
            open_tab();
            break

        case "contact":
            open_tab();

            setTimeout(() => {
                document.querySelector("#contact .picture").classList.toggle("spin");
            }, 1500);

            // scroll button
            //document.querySelector(".scroller").classList.remove("display_block");
            //document.documentElement.classList.remove("scroll_active");
            break;

        default:
            //document.querySelector(".scroller").classList.remove("display_block");
            document.documentElement.classList.remove("scroll_active");
            window.scrollTo(0,0)
            break;
    }

}

export {navbar, cometo}