function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100)
}

function generateRandomBool(): boolean {
    return Math.random() > 0.5 ? true : false
}
export { generateRandomNumber, generateRandomBool }