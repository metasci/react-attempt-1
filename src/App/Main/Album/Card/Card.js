import React from 'react';

class Card extends React.Component {

    render() {
        const data = this.props.data;

        return (
            <div class="card mb-4 shadow-sm">
                <img src={data.thumbnailUrl} class="bd-placeholder-img card-img-top" width="100%" height="225" alt=""/>
                <div class="card-body">
                    <p class="card-text">
                        {data.title}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;