import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeWrap() {
	return (
		<StyledState>
			<ul className="study-list">
				<li>
					<Link to="/state">
                        01. state 관련 예제
					</Link>
				</li>
				<li>
					<Link to="/state">
                        02. state 관련 예제
					</Link>
				</li>
				<li>
					<Link to="/state">
                        03. state 관련 예제
					</Link>
				</li>
			</ul>
		</StyledState>
	);
}


export default HomeWrap;

const StyledState = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	
	& .study-list {
		list-style: none;
		padding: 0;

		& li {
			font-size: 1.5rem;
			font-weight: 600;
			margin-top:10px;
		}
	}
`;