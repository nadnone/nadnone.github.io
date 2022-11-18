export default function mobile_fun()
{



    let logo_navbar = document.querySelector(".navbar.logo")
    let navbar_items = document.querySelectorAll(".navbar.items")

    // on retire skills, trop compliqué à afficher sur un téléphone
    navbar_items.forEach(el => el.innerText.toLowerCase() == "compétences" ? el.remove() : null);
    
    // on retire timeline, pas prévu pour téléphone
    navbar_items.forEach(el => el.innerText.toLowerCase() == "timeline" ? el.remove() : null);

    
    logo_navbar.addEventListener("click", () => {
        
        navbar_items.forEach((item) => {

            item.addEventListener("click", (event) => {
                
                let target = event.target.innerText;
                
                document.querySelector(`#${target.toLowerCase()}`).scrollIntoView();



            });
    
        })
    });



}
