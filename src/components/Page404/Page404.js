import React from 'react'
import {Link} from "react-router-dom";
import {Button, Icon, Image, Message} from 'semantic-ui-react';
import e from "../../images/e.png";

const Page404 = (props) => {
	const text = props.text ? props.text : "Page Not Found";
	return (
		
		<Message icon>
			<Message.Content>
				<Image src={e} centered/>
				<div style={{
					margin: "38px 0px",
					display: "flex",
					justifyContent: "center"
				}}>
					<Link to={"/home"}>
						<Message.Header>
							<div style={{
								textTransform: "capitalize",
								marginBottom: "13px"
							}}>
								<Icon name='exclamation triangle' loading/> {text}
							</div>
						</Message.Header>
						<Button primary style={{
							width: "174px"
						}}>Head To Home</Button>
					</Link>
				</div>
			</Message.Content>
		</Message>
	);
}

export default Page404;
