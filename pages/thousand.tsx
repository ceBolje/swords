import { Box } from '@material-ui/core';
import DefaultPageLayout from 'layouts/Default';
import React from 'react';
import { Swords } from './../components/Swords';

const Index: React.FC = (props) => {
    return (
        <DefaultPageLayout pageClassName="page-main">
            <Swords />
        </DefaultPageLayout>
    );
};

export default Index;
