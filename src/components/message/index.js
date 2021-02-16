export const message = (type, title) => {
	const message = document.createElement("span");
	message.className = `message show ${type}`;
	message.innerHTML = title;
	document.body.appendChild(message);
	setTimeout(() => {
		message.className = message.className.replace("show", "");
		document.body.removeChild(message);
	}, 3000);
};
