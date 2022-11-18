function navbar() {

    let logo_navbar = document.querySelector(".navbar.logo")
    let navbar_items = document.querySelectorAll(".navbar.items")
    
    logo_navbar.classList.add("spin")

    logo_navbar.addEventListener("click", () => {
        
        navbar_items.forEach((item) => {

            //item.classList.toggle("show_navbar");
            //item.classList.toggle("visible");
            
            item.addEventListener("click", (event) => {
                
                let target = event.target.innerText;
                cometo(target);


            });
    
        })
    });
       
    
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

    let others_id = ["contact", "gallery", "timeline", "skills"]
    let others_nb = {
        "contact": 0,
        "gallerie": 1,
        "timeline": 2,
        "compétences": 3
    }

    const choosed = others_id[others_nb[where]];
    
    for (let i = 0; i < others_id.length; i++) {

        let other = document.querySelector(`#${others_id[i]}`)

        if (choosed !== other.id)
        {   
            other.classList.remove("come_back")

            setTimeout(() => {
                other.style.display = "none"
            }, 1500)
        }
        
    }

    let div = document.querySelector(`#${choosed}`);
    div.style.display = "";

    setTimeout(() => {
        div.classList.add("come_back");
    }, 1500);





    switch(choosed)
    {
        case "gallery":
            open_tab();
            break;

        case "timeline":
            open_tab();
            break

        case "contact":
            document.querySelector("#contact .picture").classList.add("spin");
            open_tab();

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