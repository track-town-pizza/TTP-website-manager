import React from 'react';

import Link from "next/link"
import Layout from "../components/Layout"
import AccountFormHeader from "../components/account/AccountFormHeader"
import AccountForm from "../components/account/AccountForm"

const Login = () => (
	<Layout>
		<div className="responsive-width mx-auto mt-3">
			<AccountFormHeader title="Login" subtitle="Sign in to edit blog posts, the menu, and more." />
			<AccountForm>
				<div className="form-group">
					<label for="email-input">Email</label>
					<input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" />
				</div>
				<div className="form-group">
					<label for="password-input">Password</label>
					<input type="password" className="form-control" id="password-input" placeholder="Password" />
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-green w-100">Sign in</button>
				</div>
			</AccountForm>
		</div>
		<span className="responsive-width link-container mx-auto mt-2 text-center dark-green-text">
			<Link href="/forgotpassword">
				<a>Forgot your password?</a>
			</Link>
			<Link href="/register">
				<a>Register as a new user</a>
			</Link>
		</span>
		<style jsx>{`
			.responsive-width {
				width: 40%;
			}
			
			.custom-border {
				border-radius: 10px;
			}

			.link-container {
				display: flex;
				justify-content: space-between;
			}

			@media only screen and (max-width: 600px) {
				.responsive-width {
					width: 90%;
				}

				.link-container {
					flex-wrap: wrap;
					justify-content: center;
				}

				.link-container > a {
					margin: 10px 5px 0 5px;
					font-size: 20px;
				}
			}

			.page-title {
				font-family: 'Oswald', sans-serif;
				font-size: 60px;
			}

			.dark-green-text, .dark-green-text a {
				color: #094c3a;
			}

			.btn-green {
				background-color: #42a86e;
				border: 1px solid #3f855d;
				color: white;
			}

			.btn-green:hover {
				background-color: #3f855d;
			}
		`}</style>
	</Layout>
)

export default Login