import React from 'react';
import { makeAutoObservable } from "mobx"
import { observer } from 'mobx-react';

class Timer {
    private secondsPassedInner = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increaseTimer = () => {
        this.secondsPassedInner += 1;
    }

    resetTimer() {
        this.secondsPassedInner = 0;
    }

    get secondsPassed(): number {
        return this.secondsPassedInner;
    }

    get double() {
        return this.secondsPassed * 2
    }
}

// const gg: Array<number> = [];
//const ff = gg[3];

export const App = observer(() => {
    const [ state ] = React.useState(() => new Timer());

    React.useEffect(() => {
        const timer = setInterval(state.increaseTimer, 1000);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div>
            {"<<"} --- === kkk === { state.secondsPassed } === { state.double } === kkk === --- {">>"}
        </div>
    );
});
