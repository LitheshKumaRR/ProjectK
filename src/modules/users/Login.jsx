import React,{useState} from "react";
import { Link } from "react-router-dom";

let Login = (props) => {
    const [formData , setFormData ] = useState({
        email : 'litheshkumar@gmail.com',
        password : 'abc123'
    })
    const [errors ,setError] = useState({
        email : '' ,
        password : ''
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData , 
            [e.target.name]  : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();  
        if(formData.email == "litheshkumar@gmail.com" && formData.password == "abc123"){
            props.loginHandler()
            props.history.push('/cart')
        }else{
            setError({
                email : 'You have entered a wrong Email' ,
                password : 'Either email or password is wrong'
            })
        }

    }



  return (
    <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4> Login Details</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="m-auto">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h4> User Login </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange = {(e) => handleChange(e)}
                         error={errors.email}

                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange = {(e) => handleChange(e)}
                           error={errors.email}

                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-success"
                        value="Login"
                      />
                    </div>
                  </form>
                  <Link to="/forgetPassword" className="ml-auto">
                    Forget Password
                  </Link>
                  <Link to="/signup"> Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;