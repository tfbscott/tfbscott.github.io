//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Scott Fado-Bristow';

//Variable: let variable = 10;

const header = document.createElement('template');
const footer = document.createElement('template');

header.innerHTML = `<div class = "Header">
		<a class="HiddenL" href="index.html" target=_self>
		<h1 class = "PageHeader">Scott Fado-Bristow</h1>
		</a>
		<a class = "ContactButton" href = "mailto:tfbscott@gmail.com">Contact</a>
	</div>`;
	
footer.innerHTML = `<div class = "Footer">
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="index.html">Landing</a>
			</p>
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="pages/project/eighthera.html" target="_self">Eighth Era</a>
				<a class = "FooterLink" href="pages/project/descent.html" target="_self">The Descent</a>
				<a class = "FooterLink" href="pages/project/engine.html" target="_self">Custom Engine</a>
				<!--<a class = "FooterLink" href="pages/project/switch.html" target="_self">Urban Experiment</a>-->
				<a class = "FooterLink" href="pages/project/puppit.html" target="_self">PUPPIT</a>
				<!--<a class = "FooterLink" href="pages/project/aops.html" target="_self">Animations</a>-->
				<a class = "FooterLink" href="pages/project/efo.html" target="_self">EFO</a>
				<!--<a class = "FooterLink" href="pages/project/cleanup.html" target="_self">Cleanup on Aisle 6.67</a>-->
				<!--<a class = "FooterLink" href="pages/project/squarepunch.html" target="_self">SquarePunch</a>-->
			</p>
			<!--
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="pages/design/3DLevel.html">3D Level</a>
				<a class = "FooterLink" href="pages/design/2DPCG.html">2D PCG</a>
				<a class = "FooterLink" href="pages/design/Crafting.html">Economy</a>
			</p>
			-->
			
		</div>`;
	
document.body.appendChild(header.content);
document.body.appendChild(footer.content);