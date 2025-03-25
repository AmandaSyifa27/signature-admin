import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert, Button, Form } from "react-bootstrap";

const Login = () => {
  const [alertFail, setAlertFail] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();

  const onFinish = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await APIAuth.login(email, password);
      console.log("Payload :", { email, password });

      if (response) {
        alert("Login Success!");
        let returnTo = "/";
        const params = new URLSearchParams(search);
        const redirectTo = params.get("return_to");
        if (redirectTo) returnTo += `${redirectTo}`;
        
        setTimeout(() => {
          navigate(returnTo);
        }, 1000);
      } else {
        setAlertFail(true);
      }
    } catch (error) {
      setAlertFail(true);
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <div className="login-logo">
          <a href="#"><b>Admin</b>LTE</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>  
          <Alert
            style={{ width: "auto", float: "right", lineHeight: "1.5" }}
            show={alertFail}
            variant="danger"
            onClose={() => setAlertFail(false)}
            dismissible
          >
            <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
          </Alert>
          <Form onSubmit={onFinish} method="post" encType="multipart/form-data">
            <Form.Group className="form-group has-feedback">
              <Form.Control name="email" type="email" className="form-control" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="form-group has-feedback">
              <Form.Control name="password" type="password" className="form-control" placeholder="Password" required />
            </Form.Group>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label><input type="checkbox" /> Remember Me</label>
                </div>
              </div>
              <div className="col-xs-4">
                <Button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
