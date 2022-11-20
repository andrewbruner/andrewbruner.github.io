function toggleSpoiler(event) {
	const textContent = event.target.textContent;
	event.target.textContent = textContent === 'Show More' ? 'Show Less' : 'Show More';
	event.target.nextSibling.classList.toggle('hidden');
}

const url = 'https://fosstodon.org/api/v1/accounts/109339531040776096/statuses';

fetch(url)
	.then(response => response.json())
	.then(data => {
		const statuses = document.querySelector('.statuses');
		let totalStatuses = 0;
		for (let i = 0; i < data.length; i++) {
			if (!data[i].in_reply_to_account_id) {
				const status = document.createElement('div');
				status.classList.add('status');
				const date = document.createElement('h4');
				date.classList.add('status-date');
				const link = document.createElement('a');
				link.href = data[i].url;
				link.textContent = new Date(data[i].created_at)
					.toLocaleDateString('en-US', { dateStyle: 'medium' });
				date.append(link);
				status.append(date);
				const content = document.createElement('div');
				content.classList.add('status-content');
				let html = '';
				if (data[i].spoiler_text) {
					html += `<p>${data[i].spoiler_text}</p><button class="spoiler-button" onclick="toggleSpoiler(event)">Show More</button><div class="hidden">${data[i].content}</div>`;
				} else {
					html += data[i].content;
				}
				if (data[i].media_attachments.length) {
					data[i].media_attachments.forEach(media => {
						html += `<img src="${media.url}" width="100%" />`;
					});
				}
				content.innerHTML = html;
				status.append(content);
				statuses.append(status);
				totalStatuses++;
			}
			if (totalStatuses > 4) {
				break;
			}
		};
	});
