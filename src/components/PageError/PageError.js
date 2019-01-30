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
			 message = "Kindly login to access this page."
			 timer={5000}
			 url="/"
		 />
		</div>
	)
};
export default PageError;
