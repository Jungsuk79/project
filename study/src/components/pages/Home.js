import React, { Component } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import HomeWrap from "../organisms/HomeWrap";

class Home extends Component {
	render() {
		return (
			<StyledDiv>
                <Header page="main" />
				<HomeWrap />
			</StyledDiv>
		);
	}
}

export default Home;

const StyledDiv = styled.div`
	padding:20px;
`;