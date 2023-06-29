// Get all the section elements
const sections = document.querySelectorAll("main > section");
const scrollSpyLinks = document.querySelectorAll("div#scroll-spy a");

// Create an Intersection Observer
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((section) => {
			if (section.isIntersecting) {
				document.querySelector("div#scroll-spy li.active")?.classList.remove("active");
				document.querySelector(`div#scroll-spy li:has(a[data-target-id=${section.target.id}])`)?.classList.add("active");
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
