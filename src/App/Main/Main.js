import React from 'react';
import Hero from './Hero/Hero';
import Album from './Album/Album';

class Main extends React.Component {

    render() {
        return (
            <main role="main">
                <Hero />
                <Album />
            </main>
        );
    }

}

export default Main;