import React from "react"
import Link from "next/link"

const NavBar = ({ info }) => {
	return (
		<nav className="navbar navbar-expand-md navbar-green top">
			<div className="d-inline-flex bd-highlight">
				<Link href="/">
					<a id="navbar-logo">
						<img src="https://drive.google.com/uc?id=1j94pNWIwre3EaH1cfNQnJjJWMQrL0Nkv" alt="Track Town Pizza" id="navbar-image" width="350px" />
					</a>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-expanded="false" aria-label="Toggle navigation">
						&#9776;
				</button>
			</div>

			<div className="collapse navbar-collapse" id="navbar-content">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href="#">
							<a className="link">This is not the actual website. Click here to access the actual website</a>
						</Link>
					</li>
				</ul>
			</div>

			<style jsx>{`
				.link {
					text-transform: uppercase;
					font-family: 'Oswald', sans-serif;
					font-size: 20px;
					padding: 0 20px;
					color: #ffec65;
				}

				.navbar-green {
					background-color: #007030;
					height: 60px;
					margin-bottom:-60px;
				}

				#navbar-logo {
					margin-right: 15%;
				}

				.navbar-toggler {
					height: 30px;
					width: 20%;
					right: 0;
					float: right;
					position: absolute;
					background-color: red;
					background-color: #005530;
					font-size: 1em;
					margin-right: 2.5%;
				}

				#navbar-content {
					background-color: #007030;
					width: 25%;
					padding: 5px;
					z-index: 5;
				}

				@media (max-width: 1140px) {
					.phoneNumContainer {
						display: none;
					}
				}

				@media (max-width: 800px) {
					#navbar-image {
						width: 250px;
					}
				}

				@media (max-width: 767px) {
					#navbar-content {
						text-align: center;
						position: absolute;
						top: 59px;
						right: 0;
					}
				}

				@media (max-width: 600px) {
					.navbar-toggler {
						margin-right: 10%;
					}
					#navbar-image {
						width: 200px;
					}
					#navbar-content {
						font-size: 1.5em;
						width: 40%;
					}
				}

			`}</style>
		</nav>
	)
}

export default NavBar
