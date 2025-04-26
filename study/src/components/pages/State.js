import React, { Component } from "react";
import styled from "styled-components";
import StateWrap from "../organisms/StateWrap";

class State extends Component {
	render() {
		return (
			<StyledDiv>
				<StateWrap />
			</StyledDiv>
		);
	}
}

export default State;

const StyledDiv = styled.main`
	
	@media ${(props) => props.theme.mobile} {
		
	}
`;