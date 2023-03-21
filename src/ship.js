const Ship = (length) => {
    if (isNaN(length) || length < 1) return null;
    let hits = 0;

    const hit = () => {
        if (length == hits) return 'cannot hit a sunk ship'
        hits += 1;
    };

    const getHits = () => {
        return hits;
    }

    const isSunk = () => {
        return length == hits ? true : false;
    }

    return {length, getHits, hit, isSunk}
};


export default Ship;