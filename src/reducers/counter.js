export default function (state = 0, payload) {
    switch (payload.type) {
        case 'increment':
            return ++state;
        case 'decrement':
            return --state;
        default:
            return state;
    }
}