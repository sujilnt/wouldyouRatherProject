import React from 'react'
import {Icon, Message} from 'semantic-ui-react'

const Page404 = () => (
	<Message icon>
		<Icon name='circle notched' loading/>
		<Message.Content>
			<Message.Header>page not found </Message.Header>
		</Message.Content>
	</Message>
);

export default Page404;
