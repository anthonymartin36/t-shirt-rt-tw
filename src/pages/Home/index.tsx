import PageLayout from "../../components/PageLayout"
import React from "react"
import Header from "../../components/Header"
import Hero from "../../modules/Hero"
import Products from "../../modules/Products"

const Home = () => {
	const [darkMode, setDarkMode] = React.useState(true)

	return (
		<PageLayout darkMode={darkMode}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode}/>
			<Hero />
			<Products />
		</PageLayout>
	);
};

export default Home