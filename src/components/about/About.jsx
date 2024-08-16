import "./About.css";

const About = () => {
	return (
		<section className="about-section pt-[75px]">
			<div className="container">
				<div className="about">
					<div className="about__box">
						<div className="about__box-title">
							<h2 className="about__sub-title flex items-center gap-[25px]">
								About us{" "}
								<span className="line w-[45px] h-[3px] bg-[#A6835E]"></span>
							</h2>
						</div>
						<div className="about__box-bottom flex justify-end">
							<h2 className="about__title w-[231px]">Food Exxe Relo</h2>
							<p className="about__text w-[526px] ml-[70px]">
								Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
								lectus phasellus non ornare eget velit. Facilisi urna, tristique
								dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
								pulvinar sit volutpat nulla vestibulum. Morbi pellentesque enim
								massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi
								massa enim nullam sem vehicula. Amet quis pellentesque enim
								porttitor lectus interdum. Nisi, faucibus pharetra at porttitor.
								Fringilla luctus pretium in viverra. In adipiscing tempor amet
								malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate
								risus massa dictum. Cras at quis in eu, faucibus feugiat vel.
								At.
							</p>
						</div>
					</div>
					<div className="about__box">
						<div className="about__box-title">
							<h2 className="about__sub-title flex items-center gap-[25px]">
								Menu{" "}
								<span className="line w-[45px] h-[3px] bg-[#A6835E]"></span>
							</h2>
						</div>
						<div className="about__box-bottom flex justify-end items-center">
							<h2 className="about__title w-[231px]">Menu</h2>
							<p className="about__text w-[526px] ml-[70px]">
								Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
								lectus phasellus non ornare eget velit. Facilisi urna, tristique
								dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
								pulvinar sit volutpat nulla vestibulum. Morbi pellentesque enim
								massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi
								massa enim nullam sem vehicula. Amet quis pellentesque enim
								porttitor lectus interdum. Nisi, faucibus pharetra at porttitor.
								Fringilla luctus pretium in viverra. In adipiscing tempor amet
								malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate
								risus massa dictum. Cras at quis in eu, faucibus feugiat vel.
								At.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
