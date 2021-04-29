import { useState } from 'react';
import { map } from 'lodash';
import data from 'data';

export const useSwords = () => {
    interface variant {
        cid: number;
        w: string;
        isClicked: boolean;
        isCorrect: boolean;
    }
    interface wordState {
        id: number;
        w: string;
        e: string;
        v: variant[];
    }

    const shuffle = (a: variant[]) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const initCase: wordState = {
        id: 0,
        w: data[0][0],
        e: data[0][1],
        v: shuffle([
            {
                cid: 0,
                w: data[2][2],
                isClicked: false,
                isCorrect: false,
            },
            {
                cid: 1,
                w: data[3][2],
                isClicked: false,
                isCorrect: false,
            },
            {
                cid: 2,
                w: data[0][2],
                isClicked: false,
                isCorrect: false,
            },
        ]),
    };

    const initScore = {
        correct: 0,
        error: 0,
        percent: 0,
    };

    const [selected, setCase] = useState(initCase);
    const [score, setScore] = useState(initScore);
    const [isPrompt, setPrompt] = useState<boolean>(false);

    const handlePrompt = (): void => {
        setPrompt(!isPrompt);
    };

    const updateWord = (isCorrect: boolean) => {
        if (isCorrect) {
            const timer = setInterval(function() {
                getData(selected.id);
                clearInterval(timer);
            }, 1500);
        }
    };

    const handleClick = (cid: number) => {
        let isCorrect: boolean = false;
        const v = map(selected.v, (item) => {
            item.isClicked = cid === item.cid;
            item.isCorrect = item.cid === cid && item.w === data[selected.id][2];

            if (item.isCorrect) {
                isCorrect = true;
            }
            const correct = isCorrect ? score.correct + 1 : score.correct;
            const cError = !isCorrect ? score.error + 1 : score.error;
            setScore({
                correct: correct,
                error: cError,
                percent: Math.round(((correct * 100) / (correct + cError)) * 100) / 100,
            });
            return item;
        });

        setCase({ ...selected, ...v });
        updateWord(isCorrect);
    };

    const getRand = (max: number, n1?: number, n2?: number) => {
        const rand = Math.floor(Math.random() * Math.floor(max));
        return rand !== n1 && rand !== n2 ? rand : getRand(max, n1, n2);
    };

    const dataLen = data.length;

    const getData = (selectedId: number) => {
        const id: number = getRand(dataLen, selectedId);
        const id1: number = getRand(dataLen, id);
        const id2: number = getRand(dataLen, id, id1);

        const newSelect: wordState = {
            id: id,
            w: data[id][0],
            e: data[id][1],
            v: shuffle([
                {
                    cid: 0,
                    w: data[id][2],
                    isClicked: false,
                    isCorrect: false,
                },
                {
                    cid: 1,
                    w: data[id1][2],
                    isClicked: false,
                    isCorrect: false,
                },
                {
                    cid: 2,
                    w: data[id2][2],
                    isClicked: false,
                    isCorrect: false,
                },
            ]),
        };
        setCase(newSelect);
    };

    return {
        score,
        selected,
        handleClick,
        isPrompt,
        handlePrompt,
    };
};
