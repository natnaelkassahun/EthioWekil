import React from 'react'
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';


const Design3 = () => {
	const languageContext = useContext(LanguageContext);
	return(
    <section class="py-5">
	<div class="container">
		<div class="row justify-content-center text-center mb-3">
			<div class="col-lg-8 col-xl-7">
				<h1> {languageContext.dictionary["ourService_header"]}</h1>
				<p class="lead">{languageContext.dictionary["ourService_body"]}</p>
			</div>
		</div>
		<div class="row g-4 g-md-5">
			<div class="col-md-6">
				<div class="d-flex">
					<div class="text-primary me-4">
						<svg class="bi bi-aspect-ratio" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
						<path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"></path></svg>
					</div>
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold"> {languageContext.dictionary["ProductInfo"]}</h5>
						<p>{languageContext.dictionary["ProductInfo_body"]}</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="d-flex">
					<div class="text-primary me-4">
						<svg class="bi bi-emoji-wink" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
						<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"></path></svg>
					</div>
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">Inventory management</h5>
						<p>Centralized inventory management system for merchants and the main distributor/importer.</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="d-flex">
					<div class="text-primary me-4">
						<svg class="bi bi-layout-text-window-reverse" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path>
						<path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"></path></svg>
					</div>
					
					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">Order management</h5>
						<p>Order management and tracking functionalities</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="d-flex">
					<div class="text-primary me-4">
						<svg class="bi bi-clipboard-check" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" fill-rule="evenodd"></path>
						<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
						<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg>
					</div>

					<div>
						<h5 class="mb-2 mb-lg-3 fw-bold">Both online and offline </h5>
						<p>Seamless integration between the online platform and existing offline systems.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
	);
}



export default Design3;
