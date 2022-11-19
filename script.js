const statuses = document.querySelector('.statuses');
const heading = document.createElement('h3');
heading.textContent = 'Latest Posts';
statuses.append(heading);

const url = 'https://fosstodon.org/api/v1/accounts/109339531040776096/statuses';

fetch(url)
	.then(response => response.json())
	.then(data => {
		data.forEach(datum => {
			console.log(datum);
			if (!datum.in_reply_to_account_id) {
				const status = document.createElement('div');
				status.classList.add('status');
				const date = document.createElement('h4');
				date.classList.add('status-date');
				const link = document.createElement('a');
				link.href = datum.url;
				const locales = 'en-US';
				const options = { dateStyle: 'medium' };
				link.textContent = new Date(datum.created_at).toLocaleDateString(locales, options);
				date.append(link);
				status.append(date);
				const content = document.createElement('div');
				content.classList.add('status-content');
				let html = '';
				if (datum.spoiler_text) {
					html += `<p>${datum.spoiler_text}</p>`;
				}
				html += datum.content;
				if (datum.media_attachments.length) {
					datum.media_attachments.forEach(media => {
						html += `<img src="${media.url}" width="100%" />`;
					});
				}
				content.innerHTML = html;
				status.append(content);
				statuses.append(status);
			}
		});
	});