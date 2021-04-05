import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import React from 'react';
import { useSwords } from '../useSwords';

const useStyles = makeStyles({
    cRed: {
        background: red[500],
    },
    cGreen: {
        background: green[500],
    },
    tRed: {
        color: red[500],
    },
    tGreen: {
        color: green[500],
    },
    cButton: {
        marginRight: '5px',
    },
    cContainer: {
        textAlign: 'center',
    },
});

export const Swords = () => {
    const { score, selected, handleClick } = useSwords();
    const classes = useStyles();

    return (
        <Box className={classes.cContainer}>
            <Box mt={10}>
                <Typography color="secondary" variant="h3" noWrap>
                    {selected.w}
                </Typography>
                <Typography color="primary" variant="h6" noWrap>
                    [ {selected.e} ] en
                </Typography>
                <Box my={5}>
                    {selected.v.map((key, i) => (
                        <Button
                            key={key.cid}
                            onClick={() => {
                                handleClick(key.cid);
                            }}
                            variant="outlined"
                            className={`${
                                key.isClicked && !key.isCorrect
                                    ? classes.cRed
                                    : key.isClicked && key.isCorrect
                                    ? classes.cGreen
                                    : ''
                            } ${classes.cButton}`}>
                            {key.w}
                        </Button>
                    ))}
                </Box>
                <Box my={2}>
                    <span className={classes.tGreen}>{score.correct}</span> /
                    <span className={classes.tRed}>{score.error}</span> /
                    <span className="">{score.percent}%</span>
                </Box>
            </Box>
        </Box>
    );
};

export default Swords;
