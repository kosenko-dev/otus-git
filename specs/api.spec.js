import fetch from 'node-fetch';
import {expect, test} from '@jest/globals';

/*
 * https://bookstore.demoqa.com/swagger/
 */

//  v- Homework #4 part -v
const baseUrl = 'https://bookstore.demoqa.com/Account/v1';

const date = new Date();
let uniqueName = 'ivan-ivanchenko' + date.getTime();

let newUserCredentials = {
    "userName": `\"${uniqueName}\"`,
    "password": "Qwerty1234!"
};

test('#3 Создание пользователя успешно', async() => {
    const url = baseUrl + '/User';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUserCredentials),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    await console.log(data);
    expect(response.status).toBe(201)
    expect(data.username).toBe(`"${uniqueName}"`)
})

let existingUserCredentials = {
    "userName": `\"${uniqueName}\"`,
    "password": "Qwerty1234!"
};

test('#1 Создание пользователя c ошибкой, логин уже используется', async() => {
    const url = baseUrl + '/User';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(existingUserCredentials),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    await console.log(data);
    expect(response.status).toBe(406)
})

let passwordNotCorrectCredentials = {
    "userName": `\"${uniqueName}\"`,
    "password": "1234"
};

test('#2 Создание пользователя c ошибкой, пароль не подходит', async() => {
    const url = baseUrl + '/User';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(passwordNotCorrectCredentials),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    await console.log(data);
    expect(response.status).toBe(400)
})

test('#4 Генерация токена c ошибкой', async() => {
    const url = baseUrl + '/GenerateToken';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(passwordNotCorrectCredentials),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    await console.log(data);
    expect(response.status).toBe(200)
    expect(data.status).toBe('Failed')
    expect(data.result).toBe('User authorization failed.')
})

test('#5 Генерация токена успешно', async() => {
    const url = baseUrl + '/GenerateToken';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(existingUserCredentials),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    await console.log(data);
    expect(response.status).toBe(200)
    expect(data.status).toBe('Success')
})

