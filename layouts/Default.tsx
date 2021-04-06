import React from 'react';
import { Container } from '@material-ui/core';
import { Footer } from 'components/Footer';
import Header from 'components/Header';

interface IProps {
    pageTitle?: string;
    pageClassName?: string;
    withContainer?: boolean;
}

export const DefaultPageLayout: React.FC<IProps> = ({
    pageTitle,
    children,
    pageClassName,
    withContainer,
}) => {
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
