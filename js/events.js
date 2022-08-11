import skills from "../config/skills.js";

export function event_graph(target)
{
        
    const name = target.target.parentNode.id.slice(3, target.target.parentNode.id.lenght)


    document.querySelector("#skills img").src = skills[name].media

    document.querySelectorAll("#skills .skill_pourcents").forEach((el) => {

        if (el.parentNode.id.slice(3, el.parentNode.id.length) === name)
        {
            el.classList.toggle("active_triangle")
        }
        else
        {
            el.classList.remove("active_triangle")
        }
    });


}