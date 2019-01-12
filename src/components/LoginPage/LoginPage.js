import React from "react";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
const LoginPage = ()=>(
		<div>
		<h1>Login Component </h1>
			<DefaultButton
				text='See Button'
				primary={ true }
				href='#/components/button'
			/>
	</div>
);
export default LoginPage;
