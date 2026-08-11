// A string return type function that will return get the initials of the firstname and lastname (e.g., Martin Bautista -> (MB))
export function getInitials(word: string) : string {
    return word.split(" ").map((n) => n && n.length > 0 && n[0]).join("");
}

// A string return type function that will capitalized the word (e.g., martin -> (Martin))
export function capitalize(word: string) : string {
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}