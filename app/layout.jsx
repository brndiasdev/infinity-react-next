import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
	title: "Infinity Prompt",
	description: "Descubra e Compartilhe suas ideias artísticas com o mundo!",
	icons: {
		icon: "/favicon.svg",
	},
};
const RootLayout = ({children}) => {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<main className='app'>
						<Nav />
						{children}
					</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
