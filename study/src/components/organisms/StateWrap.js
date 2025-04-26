import { useState } from "react";

function StateWrap() {

	const [state, setState] = useState(0);

	const increaseNumber = () => {
		setState(state + 1);
	}

	const decreaseNumber = () => {
		setState(state - 1);
	}


	return (
		<div className="state">
			<div >스테이트 관련</div>

			<div>
				<button type="button" onClick={decreaseNumber}>-1</button>
				<p>카운트 : {state} </p>
				<button type="button" onClick={increaseNumber}>+1</button>
			</div>

			<div>
				<pre>
						{`
const [state, setState] = useState(0);  <- 이부분이 스테이트를 관리하는 부분입니다.

const increaseNumber = () => {
setState(state + 1);
};

const decreaseNumber = () => {
setState(state - 1);
};
						`}
				</pre>
			</div>
		</div>
	);
}


export default StateWrap;
