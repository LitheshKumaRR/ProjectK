import React, { Component } from 'react'

 class Checkout extends Component {
    state={
        data:{
            firstname:'',
            lastname:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            zip:'',
            country:'',
            nameonthecard:'',
            cardnumber:'',
            expirydate:'',
            cvv:''
        },
        count:1
        
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("onsubmit",console.log(this.state))
        this.setState({
            count:1
        })
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            data:{
                [e.target.name]:e.target.value
            }
        })
    }
    inc=()=>{
        if(this.state.count<=2){
            this.setState({
                count:this.state.count+1
            })
        }
    }
    dec=()=>{
        if(this.state.count>=2){
            this.setState({
                count:this.state.count-1
            })
        }
    }


    render() {
        const {count}=this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Checkout</h2>
                            <div className="d-flex justify-content-between">
                                <span>Shipping address</span>
                                <span>Payment details</span>
                                <span>Review your order</span>
                            </div>
                            {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Shipping address</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={this.state.data.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={(e)=>this.handleChange(e)} /></td>
                                            <td><input type="text" value={this.state.data.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={this.state.data.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={this.state.data.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={this.state.data.city} name="city" className="form-control" placeholder="City *" onChange={(e)=>this.handleChange(e)} /></td>
                                            <td><input type="text" value={this.state.data.state} name="state" className="form-control" placeholder="State/Province*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={this.state.data.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={(e)=>this.handleChange(e)} /></td>
                                            <td><input type="text" value={this.state.data.country} name="country" className="form-control" placeholder="Country*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> ) : null}
                            {count === 2 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={this.state.data.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={(e)=>this.handleChange(e)} /></td>
                                            <td><input type="text" value={this.state.data.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={this.state.data.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={(e)=>this.handleChange(e)} /></td>
                                            <td><input type="text" value={this.state.data.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={(e)=>this.handleChange(e)} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div className="row">
                                        <div className="col-9 m-auto">
                                            <div className="d-flex justify-content-between">
                                                <p>Product 1 </p>
                                                <p>&#8377;600000 </p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 2 </p>
                                                <p>&#8377;120000</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 3 </p>
                                                <p>&#8377;49000</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Product 4 -</p>
                                                <p>&#8377;60000 </p>
                                            </div>
                                            <hr/>
                                            <div className="d-flex justify-content-between">
                                                <p>Total</p>
                                                <p>&#8377;250000 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div>
                                <button className="btn btn-sm btn-outline-primary" type="submit">Place Order</button>
                            </div>
                            ) : null}
                        </form>
                        <div>
                            {count === 1 ? null : ( <button className="btn btn-outline-success" onClick={()=>this.dec(count)}>Back</button>)}
                            {count === 3 ? null : ( <button className="btn btn-outline-success" onClick={()=>this.inc(count)} >Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Checkout