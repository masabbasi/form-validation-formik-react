import { useFormik } from 'formik';
import { validate } from "../../middleware/validation.js";

const Form = () => {
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
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
return (
			<form
				onSubmit={formik.handleSubmit}
				className="w-96 flex flex-col items-center justify-center"
			>
				<h1 className="text-green-600 text-4xl bg-gray-400 p-2 rounded mb-2 font-medium">
					Sign Up
				</h1>
				<div className="text-red-400 text-sm font-bold text-center">
					{formik.errors.empty}
				</div>
				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="text"
						name="name"
						value={formik.values.name}
						placeholder="Name"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.name}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="text"
						name="familyName"
						value={formik.values.familyName}
						placeholder="FamilyName"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.familyName}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="text"
						name="userName"
						value={formik.values.userName}
						placeholder="UserName"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.userName}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="email"
						name="email"
						value={formik.values.email}
						placeholder="Email"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.email}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="phone"
						name="phone"
						value={formik.values.phone}
						placeholder="Phone"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.phone}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="password"
						name="password"
						value={formik.values.password}
						placeholder="Password"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.password}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<input
						className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"
						onChange={formik.handleChange}
						type="password"
						name="confirmPassword"
						value={formik.values.confirmPassword}
						placeholder="Confirm Password"
					/>
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.confirmPassword}
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<div className="flex items-center justify-center mb-2">
						<input
							onChange={formik.handleChange}
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
					<div className="text-red-400 text-sm font-bold text-center">
						{formik.errors.checkRule}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<button
						type="submit"
						className="w-80 font-bold rounded bg-green-500 text-white text-center p-3 shadow-xl hover:bg-green-600"
					>
						Sign Up
					</button>
					<div className="text-green-400 text-sm font-bold text-center">
						{/* {success ? "Registration Was Successful." : ""} */}
					</div>
				</div>
			</form>
			)
}


export default Form;
