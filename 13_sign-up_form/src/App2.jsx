import styled from "styled-components";
import { root } from "./styled";
import Heading from "./components/Heading";
import Offer from "./components/Offer";
import { S } from "./styled";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Heading />
      <S.Main>
        <Offer />
        <form>
          <fieldset>
            <div className={`input ${errors.fname?.type ? "alert" : ""}`}>
              <input {...register("fname", { required: "First Name cannot be empty" })} className={errors.fname?.type ? "alert" : ""} type="text" placeholder="First Name" />
              {errors.fname?.type && <img src="images/alert.png" alt="alert" />}
            </div>
            {errors.fname?.type && <p>{errors.fname.message}</p>}
          </fieldset>

          <fieldset>
            <div className={`input ${errors.lname?.type ? "alert" : ""}`}>
              <input {...register("lname", { required: "Last Name cannot be empty" })} className={errors.lname?.type ? "alert" : ""} type="text" placeholder="Last Name" />
              {errors.lname?.type && <img src="images/alert.png" alt="alert" />}
            </div>
            {errors.lname?.type && <p>{errors.lname.message}</p>}
          </fieldset>

          <fieldset>
            <div className={`input ${errors.email?.type ? "alert" : ""}`}>
              <input
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Looks like this is not an email",
                  },
                })}
                className={errors.email?.type ? "alert" : ""}
                type="text"
                placeholder="Email Address"
              />
              {errors.email?.type && <img src="images/alert.png" alt="alert" />}
            </div>
            {errors.email?.type && <p>{errors.email.message}</p>}
          </fieldset>

          <fieldset>
            <div className={`input ${errors.password?.type ? "alert" : ""}`}>
              <input {...register("password", { required: "Password cannot be empty" })} className={errors.password?.type ? "alert" : ""} type="text" placeholder="Password" />
              {errors.password?.type && <img src="images/alert.png" alt="alert" />}
            </div>
            {errors.password?.type && <p>{errors.password.message}</p>}
          </fieldset>

          <button onClick={handleSubmit((data) => console.log(data))}>CLAIM YOUR FREE TRIAL</button>

          <p>
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </S.Main>
    </>
  );
}

export default App;
