export default function inputToObjParser() {
    const obj = {};
    const inputs = document.querySelectorAll('input');
    const values = [...inputs].map(input => input.value);
    const names = [...inputs].map(input => input.name);
    values.map((value, index) => obj[names[index]] = value);
    return obj;
}