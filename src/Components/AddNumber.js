import React, {useState} from 'react';
import '../App.css';

export default function AddNumber(props) {
	var [size, setSize] = useState(1);
	return (
		<div>
			<h1>Add Number</h1>
			<input type="button" value = "+" onClick={function(){
				props.onClick(size);
			}}></input>
			<input type="text" value={size} onChange={function(e){
				setSize(e.target.value);
			}}></input>
		</div>
	)
}