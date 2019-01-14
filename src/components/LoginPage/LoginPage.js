import React,{Component} from "react";
import Select,{ components } from 'react-select';
import Avatar from 'react-avatar';
import "./LoginPage.css";

const Option = props => {
	const { innerProps, innerRef } = props;
	console.log("props...",props);
	return (
		<components.Option {...props}>
			<div className="avatarContainer" ref={innerRef} {...innerProps} >
				<Avatar name={props.label} size="40" round={"4px"} />
				<span style={{padding: "0 20px"}}>{props.label}</span>
			</div>
		</components.Option>
	);
};
const SingleValue = props => {
	const { innerProps, innerRef } = props;
	return (
		<components.SingleValue {...props}>
			<div className="" ref={innerRef} {...innerProps} >
				<Avatar name={props.data.label} size="30" round={"4px"} />
				<span style={{padding: "0px 10px"}}>{props.data.label}</span>
			</div>
		</components.SingleValue>
	);
};

const ValueContainer = ({ children, ...props }) =>{
	console.log("value",children,props);
	return (
		<components.ValueContainer {...props}>
			<div>
				{children}
				<Avatar name={props.label} size="40" round={"4px"} />
			</div>
		</components.ValueContainer>
	);
};

class LoginPage extends Component{
	state={};
	convertPropItems = (items)=>{
		const keys = Object.keys(items);
		const newkeys= keys.map((list)=>{
			return{
				...items[list],
				label: items[list].name,
				value: items[list].id
			}
		});
		return newkeys;
	};
	render(){
		const {getUsers}=this.props;
		const options=this.convertPropItems(getUsers);
		return (
			<div className="loginPageSelectcontainer">
				<h1>Login Component </h1>
				<div className="flexContainer">
					<div className="selectContainer">
						<Select
							isClearable
							components={{Option,SingleValue}}
							isSearchable
							name="color"
							options={options}
							className="react-select-LoginPage"
						/>
					</div>
				</div>
			
			</div>
		)
	}
};
export default LoginPage;
