import logo from "../../img/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";
import { useLocation } from "react-router-dom";

const Nav = () => {
	const location = useLocation();
	const [headerColor, setHeaderColor] = useState("transparent");

	useEffect(() => {
		if (location.pathname === "/") {
			const handleScroll = () => {
				const scrollTop = window.scrollY;
				if (scrollTop > 50) {
					setHeaderColor("#262626");
				} else {
					setHeaderColor("transparent");
				}
			};

			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		} else {
			setHeaderColor("#262626");
		}
	}, [location.pathname]);

	return (
		<header
			className="site-header"
			style={{
				backgroundColor: headerColor,
				transition: "background-color 0.3s ease",
			}}
		>
			<div className="container">
				<div className="header flex items-center justify-between">
					<Link to="/">
						<img src={logo} alt="FOOD" className="header__img w-[80]" />
					</Link>
					<nav className="header__nav nav ">
						<ul className="nav__list flex">
							<li className="nav__item">
								<NavLink
									className=" text-[#A6835E] hover:text-[#fff] transition-all"
									to="/menu"
								>
									Menu
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink
									className=" text-[#A6835E] hover:text-[#fff] transition-all"
									to="/"
								>
									Delivery
								</NavLink>
							</li>
							<li className="nav__item">
								<NavLink
									className=" text-[#A6835E] hover:text-[#fff] transition-all"
									to="/"
								>
									Payment
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Nav;
