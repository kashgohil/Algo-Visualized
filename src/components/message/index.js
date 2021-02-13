export const message = (type, title) => {
	const message = document.createElement("span");
	console.clear();
	console.log(message, "message");
	message.className = `message show ${type}`;
	// message.style = 'background: red; width: 200px; padding: 10px;'
	message.innerHTML = title;
	document.body.appendChild(message);
	setTimeout(() => {
		message.className = message.className.replace("show", "");
		document.body.removeChild(message);
	}, 3000);
};
