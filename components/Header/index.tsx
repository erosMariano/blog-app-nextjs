import { Container, MaxContainer, MyInput } from "./styles";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
function Header() {
	const [typeBackground, setTypeBackground] = useState(false);
	const [inputTamanho, setInputTamanho] = useState("33px");



	function handleModeTheme() {
		setTypeBackground(!typeBackground);
	}
	function handleInput() {
		setInputTamanho("200px");
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
					<div className="search">
						<BsSearch onClick={handleInput} />
						<MyInput
							type="search"
							className="inputSearch"
							onClick={handleInput}
							width={inputTamanho}
						/>
					</div>
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
