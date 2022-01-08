import DisplayNumber from "../Components/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
	return {
		number: state.number
	}
}
function mapReduxDispatchToReactProps(){
	return {
		
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);

/*
import React, {useState} from 'react';
import store from "../store";

export default function () {
	var [number, setNumber] = useState(store.getState().number)

	store.subscribe(function(){
		setNumber(store.getState().number);
	});

	return (
		<DisplayNumber number={number}></DisplayNumber>
	)
}
*/ 