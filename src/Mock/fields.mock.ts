const makeRandomNames = (length: number, searchWord: string, max = 15, min = 5) => {
    const result = [];
    const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let j = 0; j < length; j++) {
        let word = "";
        for (let i = 0; i < Math.floor(Math.random() * (max - min) + min); i++) {
            word += map.charAt(Math.floor(Math.random() * map.length));
        }
        if (searchWord.length > 1) {
            word += searchWord;
        }
        result.push(word);
    }
    return result;
}

const getGroups = async (number: number) => {
    const rnd = () => ({
        type: 'Asd',
        name: 'assa',
        value: makeRandomNames(1, "", 10, 5)[0],
    })
    const rez = []
    for (let i = 0; i < number; ++i) {
        rez.push(rnd())
    }
    return rez;
}

export default getGroups