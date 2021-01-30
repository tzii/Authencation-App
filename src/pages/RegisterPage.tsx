import { Link, useHistory } from "react-router-dom";
import Logo from "../images/devchallenges.svg";
import { FormEvent, useEffect } from "react";
import GoogleLogin from "../components/GoogleLogin";
import FacebookLogin from "../components/FacebookLogin";
import GithubLogin from "../components/GithubLogin";
import { connect } from "react-redux";
import { userLocalRegister } from "../stores/userReducer";

function RegisterPage({ user, userLocalRegister }: any) {
  const history = useHistory();
  useEffect(() => {
    if (user.uid) history.push("/");
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLocalRegister({ email: e.currentTarget.email.value, password: e.currentTarget.password.value });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="sm:h-auto h-full sm:block flex flex-col justify-between">
        <form className="sm:w-120 w-screen sm:p-10 p-4 sm:border sm:border-gray-350 sm:rounded-2xl" onSubmit={onSubmit}>
          <img src={Logo} alt="" />
          <h2 className="text-lg font-semibold my-6">Join thousands of learners from around the world </h2>
          <p className="mb-3">
            Master web development by making real-life projects. There are multiple paths for you to choose
          </p>
          <label className="relative">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 border border-gray-350 rounded-xl pl-11 pr-3 my-3"
            />
            <i className="fas fa-envelope absolute left-3 pos-center text-2xl text-gray-450"></i>
          </label>
          <label className="relative my-3">
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="w-full h-12 border border-gray-350 rounded-xl pl-11 pr-3"
              required
            />
            <i className="fas fa-lock-alt absolute left-3 pos-center text-2xl text-gray-450"></i>
          </label>
          <button
            type="submit"
            className="bg-blue-550 hover:bg-blue-600 active:bg-blue-700 w-full rounded-xl h-10 my-6 text-white font-semibold"
          >
            Start coding now
          </button>
          <div className="flex flex-col items-center mt-3">
            <p className="text-sm">or continue with these social profile</p>
            <div className="flex my-3">
              <GoogleLogin />
              <FacebookLogin />
              <GithubLogin />
            </div>
            <p className="text-sm mt-2">
              Adready a member?{" "}
              <Link className="text-blue-550 hover:text-blue-600 active:text-blue-700" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
        <div className="flex justify-between text-sm text-gray-350 mt-2 sm:mb-0 mb-4 sm:mx-0 mx-4">
          <p>Tuấn Vũ</p>
          <p>devchallenges.io</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ user: state.user });

const mapDispatchToProps = { userLocalRegister };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
