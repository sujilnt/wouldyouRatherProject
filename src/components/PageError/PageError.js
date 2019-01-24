import React from "react";
import ErrorComponent from "../../ErrorComponent/ErrorComponent";
/*
	<PageError/>
        - A stateless Component that is used when an user mistypes the url then ,
         he will be redirected to "homePage".
         
*/
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
