async function fetchStatuses() {
	return await fetch('https://fosstodon.org/api/v1/accounts/109339531040776096/statuses')
		.then(response => response.json());
}

fetchStatuses()
	.then(data => {
		console.log(data);
		data.forEach(status => console.log(status.content));
		const statuses = document.querySelector('.statuses');
		const h3 = document.createElement('h3');
		h3.textContent = 'Latest Posts';
		statuses.append(h3);
		data.forEach(status => {
			if (!status.in_reply_to_account_id) {
				let date = document.createElement('h4');
				date.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(status.created_at));
				statuses.append(date);
				if (status.spoiler_text) {
					const spoiler = document.createElement('p');
					spoiler.textContent = status.spoiler_text;
					statuses.append(spoiler);
				}
				let content = document.createElement('p');
				content.innerHTML = status.content;
				statuses.append(content);
				if (status.media_attachments.length) {
					status.media_attachments.forEach(media => {
						const img = document.createElement('img');
						img.src = media.url;
						img.setAttribute('width', '100%');
						statuses.append(img);
					});
				}
			}
		});
	});