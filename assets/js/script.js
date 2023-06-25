// Get all the section elements
const sections = document.querySelectorAll("main > section");
const scrollSpyLinks = document.querySelectorAll("div#scroll-spy a");

// Create an Intersection Observer
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				scrollSpyLinks.forEach((el) => {
					console.log(el.dataset.targetId);
					if (el.dataset.targetId == entry.target.id) {
						el.parentElement.classList.add("active");
					} else {
						el.parentElement.classList.remove("active");
					}
				});
			}
		});
	},
	{
		root: null, // Use the viewport as the root
		rootMargin: "0px",
		threshold: 0.8, // Adjust this value based on your needs
	}
);

// Observe each section
sections.forEach((section) => {
	observer.observe(section);
});
