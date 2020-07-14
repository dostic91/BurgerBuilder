import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: "capitalize" }}>{igKey}</span> : {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with the following ingredinets: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button clicked={props.purchaseContinued}>ORDER</Button>
        </Aux>
    );
}

export default orderSummary;