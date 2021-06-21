import React from 'react'
import Button from'./button'
import ShowArea from'./showArea'
import {Color} from './colorContext'

function Index(){
	return (
		<div>
			<Color>
				<ShowArea/>
				<Button/>
			</Color>
		</div>
	)
}


export default Index
