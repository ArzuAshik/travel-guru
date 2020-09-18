export const testValid = (e, password) => {
    if (e.name === 'email') {
        const isEmailValid = /\S+@\S+\.\S+/.test(e.value);
        return isEmailValid;
    } else if (e.name === 'password') {
        const isPasswordValid = e.value.length > 7 && /\d{1}/;
        return isPasswordValid;
    } else if (e.name === 'name') {
        const isNameValid = e.value.length > 3;
        return isNameValid;
    } else if (e.name === 'confirmPassword') {
        return password === e.value;
    }
}