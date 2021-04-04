var link = $("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
	if (event.matches) {
		//dark mode
		link.href = 'dark_theme_icon.png';
	} else {
    	//light mode
    	link.href = 'light_theme_icon.png';
    }
});