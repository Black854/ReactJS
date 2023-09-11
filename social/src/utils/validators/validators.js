export const required = value => {
    if (value) return undefined;

    return 'Поле обязательно для заполнения!';
}

export const maxLength = (count) => value => {
    if (value.length > count ) return `Максимальная длина поля - ${count} символов!`;

    return undefined;
}