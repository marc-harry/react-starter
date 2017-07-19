import { combineEpics } from 'redux-observable';

import {delayedEpic} from './delayedEpic';

export const rootEpic = combineEpics(
    delayedEpic
);