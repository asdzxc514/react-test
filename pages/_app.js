import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';


const HyejinTest = ({ Component }) => {
    return (
        <>
            <Head>
            <title>HYEJIN TEST</title>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

HyejinTest.propTypes = {
Component: PropTypes.elementType,
};

export default HyejinTest;