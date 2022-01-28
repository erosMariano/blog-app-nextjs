import Image from "next/image";
import { Container } from "./styles";

function ImagePeopleHome() {
	return (
		<Container>
			<div className="center">
				<div className="pulse">
					<Image
						width={200}
						height={200}
						src="/images/meninaHome.png"
						alt="Menina propaganda"
					/>
				</div>

				<span className="cardHome1">
					<Image
						width={20}
						height={20}
						src="/images/icons/pen.svg"
						alt=""
					/>
					<p>Lorem, ipsum dolor.</p>
				</span>

				<span className="cardHome2">
					<Image
						width={20}
						height={20}
						src="/images/icons/book.svg"
						alt=""
					/>
					<p>Lorem, ipsum dolor.</p>
				</span>


				<span className="cardHome3">
					<Image
						width={20}
						height={20}
						src="/images/icons/computer.svg"
						alt=""
					/>
					<p>Lorem, ipsum dolor.</p>
				</span>

				<span className="cardHome4">
					<Image
						width={20}
						height={20}
						src="/images/icons/cloud.svg"
						alt=""
					/>
					<p>Lorem, ipsum dolor.</p>
				</span>
			</div>
		</Container>
	);
}

export default ImagePeopleHome;
