//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Scott Fado-Bristow';

//Variable: let variable = 10;

const header = document.createElement('template');
const footer = document.createElement('template');

header.innerHTML = `<div class = "Header">
		<h1 class = "PageHeader">Scott Fado-Bristow</h1>
		<a class = "ContactButton" href = "mailto:tfbscott@gmail.com">Contact</a>
	</div>`;
	
footer.innerHTML = `<div class = "Footer">
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="index.html">Landing</a>
			</p>
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="pages/project/puppit.html">PUPPIT</a>
				<a class = "FooterLink" href="pages/project/aops.html">Animations</a>
				<a class = "FooterLink" href="pages/project/efo.html">EFO</a>
				<a class = "FooterLink" href="pages/project/cleanup.html">Cleanup on Aisle 6.67</a>
				<a class = "FooterLink" href="pages/project/squarepunch.html">SquarePunch</a>
			</p>
			<p class = "FooterText" style = "text-align: center;">
				<a class = "FooterLink" href="pages/design/3DLevel.html">3D Level</a>
				<a class = "FooterLink" href="pages/design/2DPCG.html">2D PCG</a>
				<a class = "FooterLink" href="pages/design/Crafting.html">Economy</a>
			</p>
			
		</div>`;
	
document.body.appendChild(header.content);
document.body.appendChild(footer.content);