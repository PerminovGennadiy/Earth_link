export const  required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLenghtCreator = (maxValue) => (value) => {
    if (value.length > maxValue) return `Max lenght is ${maxValue} symbols`;
    return undefined;
}
