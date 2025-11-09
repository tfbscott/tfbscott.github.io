function CreateHTML(json)
{
	const obj = JSON.parse(json);

	let projectsHTML = `
		<div class="projectBox">
			<div>
				<h1 class="projectText">About Me</h1>
				<p class="projectText">${obj.aboutMe}</p>
			</div>
			<img src=${obj.photo} alt="Photo of Me"></img>		
		</div>`;

	for(let e = 0; e < obj.eras.length; e++)
	{
		let eraObject = obj.eras[e];
		projectsHTML += `<h1 class="center"> - ${eraObject.name} - </h1>`;
		projectsHTML += '<div>';

		for(let p = 0; p < eraObject.projects.length; p++)
		{
			let projectObj = eraObject.projects[p];
	
			let skillsHTML = "<ul>";

			for(let i = 0; i < projectObj.skills.length; i++)
			{
				skillsHTML += `<li class="projectText">${projectObj.skills[i]}</li>`;
			}
		
			skillsHTML += "</ul>";
		
			let linksHTML = `<div class="linkBox">`;
		
			if(projectObj.links){
				for(let l = 0; l < projectObj.links.length; l++)
				{
					let linkObj = projectObj.links[l];
					linksHTML += `<p class="projectText"> <a href=${linkObj.dest}>${linkObj.text}    </a> </p>`;
				}
			}
		
			linksHTML += `</div>`;

			let galleryHTML = `<div class="gallery">`
	
			for(let j = 0; j < projectObj.gallery.length; j++)
			{
				let galleryObj = projectObj.gallery[j];
				galleryHTML += 
				`<div class="gallery-item">
					<a target="_blank" href="${galleryObj.img}">
						<img src=${galleryObj.img} alt=${galleryObj.alt}>
					</a>
					<div class="galleryText">${galleryObj.desc}</div>
				</div>`;
			}
	
			galleryHTML += "</div>";
	
			let projectHTML = 
			`<div class="projectBox">
				<img src=${projectObj.background}></img>
				<div>
					<h1 class="projectText">${projectObj.name}</h1>
					<p class="projectText">${projectObj.desc}</p>
					${skillsHTML}
					${linksHTML}
				</div>
			</div>
			${galleryHTML}`;
		
			projectsHTML += projectHTML;
		}
	
		projectsHTML += '</div>';
	
		return projectsHTML;
	}
}

fetch("https://www.scottiet.games/json/page.json")
.then(x => x.text())
.then(y => document.getElementById("projects").innerHTML = CreateHTML(y));
