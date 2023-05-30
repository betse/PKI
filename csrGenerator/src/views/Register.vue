<template>
  <div class="wrapper">
    <div class="container">
      <div class="box">
        <div class="title">
          <h2>Sign up</h2>
          <span>Enter username and password to Register</span>
        </div>
        <Form :validation-schema="schema">
        <div class="input">
          <div class="uname">
            <span>Username</span>
             <Field name="username" type="text" placeholder="Username" v-model="this.model.user.username"/>
             <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="email">
            <span>Email</span>
            <Field name="email" type="email" placeholder="Email" v-model="this.model.user.email"/>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="pass">
            <span>Password</span>
            <Field name="password" type="password" placeholder="Password" v-model="this.model.user.password"/>
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <input class="submit" type="submit" value="Sign up" />
        </div>
        <div class="register">
          <p>
            Already have Account?
            <RouterLink to="/login"><span> Login </span> </RouterLink>
          </p>
        </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "use at least 6 characters"),
    });
    return {
      schema,
      model: {
        user: {
          username: "",
          email: "",
          password: "",
        },
      },
      message: "",
    };
  },
}
</script>


<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  padding-top: 3.5rem;
  display: flex;
  align-self: center;
  justify-content: center;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
.container {
  min-height: 700px;
  height: calc(100vh - 3.5rem);
  width: max-content;
  /* margin: auto auto; */
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  width: 500px;
  background: var(--vt-c-white);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 6px;
  padding: 2rem;
}
form{
    width: 100%;
}
.title {
  height: 110px;
  width: 90%;
  background: rgb(37, 126, 243);
  border-radius: 6px;
  margin-bottom: 5rem;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title h2,
.title span {
  color: var(--vt-c-white);
}
h2 {
  font-weight: bold;
}
.title span {
  font-weight: 400 !important;
}
span {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #555;
}
.input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
.uname,
.email,
.pass {
  display: flex;
  flex-direction: column;
}
.submit {
  margin-top: 1rem;
  background: rgb(37, 126, 243);
  color: white;
  font-weight: bold;
  cursor: pointer;
}
input {
  border: none;
  background: #e3eeff;
  padding: 0.7rem;
  border-radius: 4px;
  font-family: "Open Sans", sans-serif;
  color: #555;
}
input:focus {
  outline: none;
  box-shadow: 0 0 5px rgb(37, 126, 243);
  border: 1px solid rgb(37, 126, 243);
}
.register {
  margin: 2rem 0;
}
.register p {
  font-weight: 500;
}
.register p span {
  color: rgb(37, 126, 243);
}
.register a {
  text-decoration: none;
}
.error-feedback {
    padding-top: .5rem;
    font-size: .8rem;
  color: rgb(255, 4, 4);
}
</style>
