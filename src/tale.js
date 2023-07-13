function kolobok(characterName) {
    switch(characterName.toLowerCase()) {
        case 'дедушка':
            console.log( 'Я от дедушки ушёл' );
            break;
        case 'заяц':
            console.log( 'Я от зайца ушел' );
            break;
        case 'лиса':
            console.log( 'Меня съели' );
            break;
        default:
            throw new Error(`Строка = '${characterName}' не обрабатывается функцией kolobok`);
            break;
    }
}

kolobok('дедушка')
kolobok('лиса')

function newYear(characterName) {
    switch(characterName) {
        case 'Дед Мороз':
        case 'Снегурочка':
            console.log(`${characterName}! ${characterName}! ${characterName}!`);
            break;
        default:
            throw new Error(`Строка = '${characterName}' не обрабатывается функцией newYear`);
            break;
    }
}

newYear('Дед Мороз')
newYear('Снегурочка')
