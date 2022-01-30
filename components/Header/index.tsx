import { Container, MaxContainer, MyInput } from "./styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import Link from "next/link";
function Header() {
	const [typeBackground, setTypeBackground] = useState(false);

	function handleModeTheme() {
		setTypeBackground(!typeBackground);
	}

	return (
		<Container>
			<MaxContainer>
				<div className="logo">
					<Link href="/">
						<a>
							<h2 style={{ cursor: "pointer" }}>
								Blog<span>.</span>Dev
							</h2>
						</a>
					</Link>
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
