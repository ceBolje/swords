import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import React from 'react';
import { useSwords } from '../useSwords';

const useStyles = makeStyles({
    cRed: {
        backgroundColor: red[500],
        '&:hover, &:focus': {
            backgroundColor: red[500],
        },
    },
    cGreen: {
        backgroundColor: green[500],
        '&:hover, &:focus': {
            backgroundColor: green[500],
        },
    },
    tRed: {
        color: red[500],
    },
    tGreen: {
        color: green[500],
    },
    cButton: {
        margin: '5px auto',
        display: 'block',
        minWidth: '190px',
    },
    cContainer: {
        textAlign: 'center',
    },
});

export const Swords = () => {
    const { score, selected, handleClick } = useSwords();
    const classes = useStyles();

    return (
        <Box mt={6} className={classes.cContainer}>
            <Typography color="secondary" variant="h3" noWrap>
                {selected.w}
            </Typography>
            <Typography color="primary" variant="h6" noWrap>
                [ {selected.e} ] en
            </Typography>
            <Box mt={7}>
                {selected.v.map((key, i) => (
                    <Button
                        key={key.cid}
                        onClick={() => {
                            handleClick(key.cid);
                        }}
                        variant="outlined"
                        className={
                            key.isClicked && !key.isCorrect
                                ? `${classes.cRed} ${classes.cButton}`
                                : key.isClicked && key.isCorrect
                                ? `${classes.cGreen} ${classes.cButton}`
                                : `${classes.cButton}`
                        }>
                        {key.w}
                    </Button>
                ))}
            </Box>
            <Box mt={5}>
                <span className={classes.tGreen}>{score.correct}</span> /
                <span className={classes.tRed}>{score.error}</span> /
                <span className="">{score.percent}%</span>
            </Box>
        </Box>
    );
};

export default Swords;
