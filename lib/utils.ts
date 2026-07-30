export function getInitials(name: string){
    return name.split(" ").map((n) => n && n.length > 0 && n[0]).join("");
}