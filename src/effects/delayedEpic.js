import { Observable } from 'rxjs';

// Merge map will trigger everytime
// Switch map will override existing if delay is occurring.

export const delayedEpic = action$ =>
    action$.ofType('increment')
        .delay(1000)
        .switchMap(action => {
            return Observable.of({}).delay(5000);
        })
        .map(action => {
            console.log('The decrement');
            return { type: 'decrement' };
        });