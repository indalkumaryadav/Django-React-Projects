import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/css/style.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  document.body.className = "fp-page";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 700],
          },
        ]}
        subsets={["latin", "cyrillic-ext"]}
      />
      <GoogleFontLoader
        fonts={[
          {
            font: "Material+Icons",
          },
        ]}
      />
      <div class="fp-box">
        <div class="logo">
          <a href="javascript:void(0);">Forget Password</a>
        </div>
        <div class="card">
          <div class="body">
            <form
              id="forgot_password"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div class="msg">
                Enter your email address that you used to register. We'll send
                you an email with your username and a link to reset your
                password.
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">email</i>
                </span>
                <div class="form-line">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required
                    autofocus
                    ref={register}
                  />
                </div>
              </div>

              <button
                class="btn btn-block btn-lg bg-pink waves-effect"
                type="submit"
              >
                RESET MY PASSWORD
              </button>

              <div class="row m-t-20 m-b--5 align-center">
                <Link to="/login">Sign In!</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
