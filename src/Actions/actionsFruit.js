import { ADD_FRUIT, REMOVE_ALL_FRUITS } from './typeActions';

export function addFruit(myFruit) {
    return {
        type: ADD_FRUIT,
        payload: myFruit
    };
}

export function viderFruit() {
    return {
        type: REMOVE_ALL_FRUITS
    };
}
