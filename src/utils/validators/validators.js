export const required = value => {
    if (value) return undefined;

    return 'Поле обязательно для заполнения!';
}

// что то не так с этой функцией. без замыкания работает, с замыканием нет

// export const maxLength = (count) => value => {
//     if (value && value.length > count ) return `Максимальная длина поля - ${count} символов!`;

//     return undefined;
// }

export const maxLength = value => {
    if (value && value.length > 50 ) return `Максимальная длина поля - 50 символов!`;

    return undefined;
}