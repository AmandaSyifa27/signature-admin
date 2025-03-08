import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert, Button, Form } from "react-bootstrap";

const Login = () => {
  const [alertFail, setAlertFail] = useState(false);
  // useEffect(() => {

  // })

  const navigate = useNavigate();
  const {search} = useLocation();
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
      email,
      password,
    };

    const handleSubmit = async () => {
      try {
        await APIAuth.login(payload);
        console.log("Payload dikirim:", payload);
        alert("Login Success!");
        let returnTo = "/";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
      } catch (error) {
        setAlertFail(true);
      }
    };
    handleSubmit(e);
  }
    return (
       <div className="login">
        <header>

  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>AdminLTE 2 | Log in</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
  <link rel="stylesheet" href="../%PUBLIC_URL%/bower_components/bootstrap/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="../%PUBLIC_URL%/bower_components/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="../%PUBLIC_URL%/bower_components/Ionicons/css/ionicons.min.css" />
  <link rel="stylesheet" href="../%PUBLIC_URL%/dist/css/AdminLTE.min.css" />
  <link rel="stylesheet" href="../%PUBLIC_URL%/plugins/iCheck/square/blue.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic" />
        </header>
       <div className="login-box">
  <div className="login-logo">
    <a href="../%PUBLIC_URL%/index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
    <p className="login-box-msg">Sign in to start your session</p>  
    <Alert
                  style={{ width: "auto", float: "right", lineHeight: "1.5" }}
                  show={alertFail}
                  variant="danger"
                  onClose={() => setAlertFail(false)}
                  dismissible
                >
                   <small>
                    Masukkan username dan password yang benar. Perhatikan
                    penggunaan huruf kapital.
                  </small>
                </Alert>
    <Form onSubmit={onFinish} method="post">
      <Form.Group className="form-group has-feedback">
        <Form.Control name="email" type="email" className="form-control" placeholder="Email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback" />
      </Form.Group>
      <Form.Group className="form-group has-feedback">
        <Form.Control name="password" type="password" className="form-control" placeholder="Password" />
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </Form.Group>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </div>
        {/* /.col */}
        <div className="col-xs-4">
          <Button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</Button>
        </div>
        {/* /.col */}
      </div>
    </Form>
    <div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
        Facebook</a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
        Google+</a>
    </div>
    {/* /.social-auth-links */}
    <a href="#">I forgot my password</a><br />
    <a href="register.html" className="text-center">Register a new membership</a>
  </div>
  {/* /.login-box-body */}
</div>
{/* /.login-box */}
{/* jQuery 3 */}
{/* Bootstrap 3.3.7 */}
{/* iCheck */}

</div>

    )
};

export default Login;