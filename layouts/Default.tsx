import { Container, makeStyles } from '@material-ui/core';
import { Footer } from 'components/Footer';
import Header from 'components/Header';
import { Head } from 'next/document';
import React from 'react';

interface IProps {
    pageTitle?: string;
    pageClassName?: string;
    withContainer?: boolean;
}

const useStyles = makeStyles({
    cContainer: {
        marginTop: '100px',
    },
});

export const DefaultPageLayout: React.FC<IProps> = ({
    pageTitle,
    children,
    pageClassName,
    withContainer,
}) => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg">
                <Header />
                {children}
            </Container>
            <Footer />
        </>
    );
};

DefaultPageLayout.defaultProps = {
    pageTitle: null,
    pageClassName: '',
    withContainer: true,
};

export default DefaultPageLayout;
