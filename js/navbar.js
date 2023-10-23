import { menu_id, menu_index } from "../config/menu.js"

let standby = false;

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

        item.addEventListener("click", (event) => {
            
            let target = event.target.innerText;
            cometo(target);


        });
    
    })
       
    
}

function open_tab()
{
    document.documentElement.classList.add("scroll_active");
    window.scrollTo(0,0)
}

function cometo(where)
{
    // pour empecher le bug de translation
    if (standby) return;
    standby = true;
    // ..................................

    where = where.toLowerCase();

    const choosed = menu_id[menu_index[where]];
    
    for (let i = 0; i < menu_id.length; i++) {

        let other = document.querySelector(`#${menu_id[i]}`)

        if (choosed !== other.id)
        {   
            other.classList.remove("come_back")

            setTimeout(() => {
                other.style.display = ""

                standby = false; // bug translation fix
                
            }, 1500)
        }
        
    }

    let selected_div = document.querySelector(`#${choosed}`);
    selected_div.style.display = "flex";

    setTimeout(() => {
        selected_div.classList.add("come_back");

        // spin my head because this is funny
        document.querySelector("#contact .picture").classList.toggle("spin");
    }, 1500);

    open_tab();

}

export {navbar, cometo}