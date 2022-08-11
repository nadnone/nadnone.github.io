import skills from "../config/skills.js";

export function event_graph(target)
{

    const name = target.target.id.slice(3, target.target.id.lenght);

    document.querySelector("#skills img").src = skills[name].media


}