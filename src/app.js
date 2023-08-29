const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}

function getScore(scores) {
    const values = Object.values(scores)
    let sum = 0;
    for (let i = 0; i < values.length; i += 1) {
        sum += values[i];
    }
    console.log(sum);
    return sum;
}

getScore(scores)

function getScoreByForEach(scores) {
    let sum = 0;
    for (let key in scores) {
        sum += scores[key];
    }
    console.log(sum);
    return sum;
}

getScoreByForEach(scores);

function getScoreByStream(scores) {
    let sum = Object.values(scores).reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);
    return sum;
}

getScoreByStream(scores);