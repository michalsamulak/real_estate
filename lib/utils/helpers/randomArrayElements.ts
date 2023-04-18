export const  getRandomItem = (arr: []) => {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}


export const getRandomItems = (arr: any, size: number) => {

    const items: any[] = []

    for(let i=0;i<size;i++) {
        items.push(getRandomItem(arr))
    }

    return items
}