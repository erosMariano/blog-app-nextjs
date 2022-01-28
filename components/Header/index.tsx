import { Container, MaxContainer, MyInput } from "./styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
function Header() {
	const [typeBackground, setTypeBackground] = useState(false);



	function handleModeTheme() {
		setTypeBackground(!typeBackground);
	}

	return (
		<Container>
			<MaxContainer>
				<div className="logo">
					<h2>
						Blog<span>.</span>Dev
					</h2>
				</div>

				<div>
					<div className="modeTheme">
						<button onClick={handleModeTheme}>
							{typeBackground ? (
								<BsFillMoonFill />
							) : (
								<BsFillSunFill />
							)}
						</button>
					</div>
				</div>
			</MaxContainer>
		</Container>
	);
}

export default Header;
