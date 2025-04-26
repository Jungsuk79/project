import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../atoms/Heading";

function Header(props) {
	const [Load, setLoad] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 700);
		return () => setLoad(false);
	}, []);

	return (
		<StyledHeader className={`${Load ? "on" : ""}`}>
			<Heading>리액트 기본 모음</Heading>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	max-width:1200px;
	margin:0 auto;
	& h1 {
		font-size: 3rem;
		font=weight:600;
	}
`;

export default Header;