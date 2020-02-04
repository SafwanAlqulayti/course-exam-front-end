import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstructorInfo from "../components/InstructorInfo";

function Home(props) {
  return <div>
    <Header/>
    {/* <!--============================
=            Banner            =
=============================--> */}

<section class="banner-two bg-banner-two overlay-white-slant text-overlay">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
 				<div class="block">
					<h1>Easy learn center</h1>
					{/* <h2>Conference</h2> */}
					<h3>2017</h3>
					<h6>  Saudi Arabia</h6>
 					{/* <a href="#" class="btn btn-main-md">get ticket now</a> */}
				</div>
			</div>
		</div>
	</div>
</section>
<InstructorInfo />

 {/* //ddd */}
 

 

 

 </div>
 }

export default Home;