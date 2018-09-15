import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateDownPayment } from '../../ducks/reducer';
import { updateCost } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardSix extends Component {

    render(){
        const { updateDownPayment } = this.props;
        const { updateCost } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e)=> updateCost(e.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e) => updateDownPayment(e.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cost, downPayment } = state;
    return {
        cost,
        downPayment
    }
}

export default connect (mapStateToProps, { updateCost, updateDownPayment })(WizardSix);