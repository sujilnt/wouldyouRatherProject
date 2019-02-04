import React from "react";
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated = true, ...rest}) => {
	const {routeState} = {...rest};
	return (
		<Route
			{...rest}
			render={(props) => {
				console.log("privateRoute", props, isAuthenticated);
				return isAuthenticated
					? <Component {...{...props, ...routeState}} />
					: <Redirect to={{
						pathname: '/',
						state: {from: props.location.pathname}
					}}/>
			}}
		/>
	)
};
export default PrivateRoute;
