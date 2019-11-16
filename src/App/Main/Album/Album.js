import React from 'react';
import Card from './Card/Card'

class Album extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        let requests = [];
        for(let id = 1; id < 10; id++) {
            requests.push(fetch(`https://jsonplaceholder.typicode.com/photos/${id}`))
        }

        // TODO - this is weird. figure out why this is this way 
        Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(data => this.setState({ data }));
        
    }

    render() {
        return (
            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row">

                            {this.state.data.map(cardData =>
                                <div class="col-md-4">
                                    <Card data={cardData}/>                                
                                </div>
                            )}

                    </div>
                </div>
            </div>
        );
    }

}

export default Album;