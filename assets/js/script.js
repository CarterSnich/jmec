console.log(`LIGHTMODE: ${localStorage.getItem("LIGHTMODE")}`);

const sections = document.querySelectorAll("main > section");
const scrollSpyLinks = document.querySelectorAll("div#scroll-spy a");
const themeSwitcher = document.querySelector("#theme-switcher input");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((section) => {
			if (section.isIntersecting) {
				document.querySelector("div#scroll-spy li.active")?.classList.remove("active");
				document.querySelector(`div#scroll-spy li:has(a[data-target-id=${section.target.id}])`)?.classList.add("active");

				switch (section.target.id) {
					case "home":
						document.querySelector("div.my-name").classList.add("animate");
						break;

					case "skills":
						document.querySelector("section#skills").classList.add("animate");
						break;

					case "about":
						const aboutMeHidden = document.querySelector("div.about-me > pre:first-child");
						const aboutMeVisible = document.querySelector("div.about-me > pre:nth-child(2)");

						if (!aboutMeVisible.innerText) {
							let i = 0;
							let interval = setInterval(() => {
								aboutMeVisible.innerText += aboutMeHidden.innerText[i];
								aboutMeVisible.innerHTML += "<span></span>";
								if (i >= aboutMeHidden.innerText.length - 1) clearInterval(interval);
								++i;
							}, aboutMeHidden.innerText.length * 0.05);
						}
						break;
				}
			}
		});
	},
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.8,
	}
);

sections.forEach((section) => {
	observer.observe(section);
});

themeSwitcher.addEventListener("change", function () {
	document.body.classList.toggle("light", this.checked);
	localStorage.setItem("LIGHTMODE", this.checked ? 1 : 0);
});

(function () {
	if (localStorage.getItem("LIGHTMODE") != null && localStorage.getItem("LIGHTMODE") == 1) {
		themeSwitcher.click();
	}
})();
