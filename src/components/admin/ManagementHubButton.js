import React from "react"
import Link from "next/link"

const ManagementHubButton = () => (
	<div>
		<Link href="/">
			<a><button type="button" className="btn btn-green"><i className="fas fa-arrow-left"></i>&nbsp;&nbsp;Return to Management Hub</button></a>
		</Link>
		<style jsx>{`
			.btn-green {
				background-color: #42a86e;
				border: 1px solid #3f855d;
				color: white;
			}
			
			.btn-green:hover {
				background-color: #3f855d;
			}
		`}</style>
	</div>
)

export default ManagementHubButton