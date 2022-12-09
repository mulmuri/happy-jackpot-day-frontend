export const addComma = (target: string | number) => {
    if (typeof target == 'number') target = target.toString();
    return target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const addHypen = (target: string) => {
    return target
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(-{1,2})$/g, "");
}

export const checkPWFormat = (target: string) => {
    let regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
    return regex.test(target)
}

export const checkIDFormat = (target: string) => {
    let regex = /^[A-Za-z0-9]{6,16}$/;
    return regex.test(target)
}

export const checkEmailFormat = (target: string) => {
    let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(target)
}

export const checkPhoneFormat = (target: string) => {
    let regex = /^[0-9]{11}$/
    console.log(target)
    return regex.test(target)
}