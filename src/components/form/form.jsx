import { useState } from "react";
import { useFormik } from "formik";
import { validate } from "../../middleware/validation.js";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      familyName: "",
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      checkRule: false,
    },

    onSubmit: () => {
      setSuccess(Object.keys(formik.errors).length === 0 && true);
      if (success) {
        setTimeout(() => {
          setSuccess(false);
          // {initialValues: {
          // 	name: "",
          // 	familyName: "",
          // 	userName: "",
          // 	email: "",
          // 	phone: "",
          // 	password: "",
          // 	confirmPassword: "",
          // 	checkRule: false,
          // }}
        }, 2000);
      }
    },
    validate,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-72 flex flex-col items-center justify-center"
    >
      <h1 className="w-72 text-center text-white text-4xl bg-green-600 p-2 rounded mb-2 font-medium">
        Sign Up
      </h1>
      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="name"
          value={formik.values.name}
          placeholder="Name: Masoud"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="familyName"
          value={formik.values.familyName}
          placeholder="FamilyName: Abbasi"
        />
        {formik.touched.familyName && formik.errors.familyName ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.familyName}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="userName"
          value={formik.values.userName}
          placeholder="UserName: My20Masoud"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.userName}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          name="email"
          value={formik.values.email}
          placeholder="Email: Masoud.abbasi.71@gmail.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="phone"
          name="phone"
          value={formik.values.phone}
          placeholder="Phone: 09359626811"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="password"
          value={formik.values.password}
          placeholder="Password: Masoud1234"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <input
          className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          placeholder="Confirm Password: Masoud1234"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-400 text-xs font-bold text-center">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex w-72 p-1 rounded bg-green-700 items-center justify-center mb-2">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="checkbox"
            name="checkRule"
            checked={formik.values.checkRule}
          />
          <span className="ml-2 text-slate-300">
            Accept the{" "}
            <a href="#" className="text-blue-300">
              Rules
            </a>
            !
          </span>
        </div>
        {formik.touched.checkRule && formik.errors.checkRule ? (<div className="text-red-400 text-xs font-bold text-center">
						{formik.errors.checkRule}
					</div>) : null}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="w-72 font-bold rounded bg-green-500 text-white text-center p-3 shadow-xl hover:bg-green-600"
        >
          Sign Up
        </button>
        <div className="text-green-400 text-xs font-bold text-center">
          {success ? "Registration Was Successful." : ""}
        </div>
      </div>
    </form>
  );
};

export default Form;
