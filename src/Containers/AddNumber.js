import AddNumber from "../Components/AddNumber";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
	return {
		onClick: function(size){
			dispatch({type: 'INCREMENT', size: size})
		}
	}
}
export default connect(null, mapDispatchToProps)(AddNumber);

/*
import store from '../store';
import React from 'react';
export default function (){
	return (
		//bind 대신 arrow function 사용
		<AddNumber onClick={(size) => {
			store.dispatch({type: 'INCREMENT', size: size})
		}}></AddNumber>
	)
}
*/