import React from 'react'
import './page.component.css';
import { Layout } from '../Layout/layout.component';
import { Container } from 'semantic-ui-react';

// export default function container() {
//     return (
//         <div>
            
//         </div>
//     )
// }

export const Page = () => {
    return (
        <Container>
            <Layout></Layout>
        </Container>
    );
};
