import React from "react"
import Footer from "./components/footer"
import GoogleMaps from "./components/googleMaps"

const Index = () => (
	<div>
		<div>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"></link>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
			<button type="button" className="btn btn-primary">Button</button>
		</div>
		<GoogleMaps />
		{/* <Footer /> */}
	</div>
)

export default Index