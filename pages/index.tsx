import { Swords } from 'components/Swords';
import DefaultPageLayout from 'layouts/Default';
import React from 'react';

const Index: React.FC = (props) => {
    return (
        <DefaultPageLayout pageClassName="page-main">
            <Swords />
        </DefaultPageLayout>
    );
};

export default Index;
