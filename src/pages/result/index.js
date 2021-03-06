import React from 'react';
 
import withStore from '~/hocs/withStore'
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';

 class Result extends React.Component{
    render(){ 

        let data = this.props.stores.order.lastOrderCache
        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {data.name}!</p>
                <p><strong>Total: {data.total}</strong></p>
                <div> 
                </div>
            </div>
        )
    }
}

export default withStore(Result)