import React from "react";
import ErrorComponent from "../../ErrorComponent/ErrorComponent";
const PageError = ()=>{
	return(
		<div>
		 <ErrorComponent
			 message = "404 Error Page Not Found and redirecting to Home"
			 timer={5000}
			 url="/home"
		 />
		</div>
	)
};
export default PageError;
