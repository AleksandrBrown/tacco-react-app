import React from "react";
import FormLogo from "../../assets/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../store/slices/authSlice';
import { setCurrentUser } from '../../store/slices/userSlice'
import { usersList } from "../usersList";

function SignInForm ({handleSwitcher}) {
  const { isLoggedIn, error } = useSelector((state) => state.auth)
  const userDataObj = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [errorStatus, setErrorStatus] = React.useState(false)
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
        if(e.target.value !== "") {
          e.target.labels[0].classList.add('-translate-y-[1rem]')
        }
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      let userData = usersList.find(user => user.login === formData.username)
      dispatch(login(formData, userData))
      dispatch(setCurrentUser(userData))
    }
    React.useEffect(() => {
      setErrorStatus(error)
    },[error])
    React.useEffect(() => console.log(userDataObj),[userDataObj])
    return (
      <section className="gradient-form h-full z-30">
        <div className="container h-full p-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center dark:text-neutral-800 text-neutral-200">
            <div className="w-full">
              <div
                className="block rounded-lg dark:bg-white shadow-lg bg-stone-900">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-20"
                          src={FormLogo}
                          alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Tacco Team
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit}>
                        {errorStatus ? <p className="mb-4 text-red-500 animate-pulse">Username or password is incorrect</p> : <p className="mb-4">Please login to your account</p>}
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            value={formData.username}
                            className={`${errorStatus? "text-red-500" : ""} peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200`}
                            id="exampleFormControlInput1"
                            />
                            <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] dark:text-stone-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 dark:peer-focus:text-primary"
                            >Username
                          </label>
                        </div>
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formData.password}
                            className={`${errorStatus? "text-red-500" : ""} peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlInput11"
                            placeholder="Password" />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] dark:text-stone-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 dark:peer-focus:text-primary"
                            >Password
                          </label>
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="bg-gradient-to-r from-indigo-500 via-amber-500 to-lime-300 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            >
                            Log in
                          </button>
                          <a href="#!">Forgot password?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            onClick={handleSwitcher}
                            className="bg-transparent text-amber-800 border border-amber-800 px-4 py-2 rounded font-medium hover:bg-amber-800 hover:text-white cursor-pointer text-xs transition ease-in delay-25"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>
    )
}

export default SignInForm



// window.localStorage.setItem("token", JSON.stringify(dispatch.getState().auth.token));
// console.log(JSON.parse(window.atob(dispatch.getState().auth.token.split('.')[1])).exp * 1000 - Date.now