
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export function doIncrement() {
    return {
        type: INCREMENT
    }
}

export function doDecrement() {
    return{
        type : DECREMENT,
    }
}