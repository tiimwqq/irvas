const tabs = (headerSel, tabSel, contentSel, activeclass) => {

	const header = document.querySelector(headerSel),
		tabs = document.querySelectorAll(tabSel),
		content = document.querySelectorAll(contentSel);

	function hideTabsContent() {
		content.forEach((item) => {
			item.style.display = "none";
		});

		tabs.forEach((item) => {
			item.classList.remove(activeclass);
		});
	}

	function showTabsContent(i = 0) {
		content[i].style.display = "block";
		tabs[i].classList.add(activeclass);
	}

	hideTabsContent();
	showTabsContent();

	header.addEventListener("click", (e) => {
		const target = e.target;
		if (
			(target && target.classList.contains(tabSel.replace(/\./, ""))) ||
			target.parentNode.classList.contains(tabSel.replace(/\./, ""))
		) {
			tabs.forEach((item, i) => {
				if (item == target || item == target.parentNode) {
					hideTabsContent();
					showTabsContent(i);
				};
			});
		};
	});
};

export default tabs;
