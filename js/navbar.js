function navbar() {

    let logo_navbar = document.querySelector(".navbar.logo")
    let navbar_items = document.querySelectorAll(".navbar.items")
    
    logo_navbar.addEventListener("click", () => {
        
        navbar_items.forEach((item) => {

            item.classList.toggle("show_navbar");
            item.classList.toggle("visible");
            
            item.addEventListener("click", (event) => {
                
                let target = event.target.innerText;
                cometo(target);


            });
    
        })
    });
       
    
}


function cometo(where)
{
    where = where.toLowerCase();


    let others = ["contact", "gallery", "skills"]

    for (let i = 0; i < others.length; i++) {
        const other = document.querySelector(`#${others[i]}`)

        if (other.innerText !== where)
        {
            other.classList.remove("come_back");

        }

        
    }


    let div = document.querySelector(`#${where}`);
    div.classList.add("come_back");


    switch(where)
    {
        case "gallery":
            document.querySelector(".scroller").classList.add("display_block");
            break;
        case "contact":
            document.querySelector("#contact .picture").classList.add("spin");
            break;

        default:
            document.querySelector(".scroller").classList.remove("display_block");
            window.scrollTo(0,0)
            break;
    }

}

export {navbar, cometo}