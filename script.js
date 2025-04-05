// script.js
function openShareModal() {
	document.getElementById('shareModal').style.display = 'flex';
}

function closeModal() {
	document.getElementById('shareModal').style.display = 'none';
}

function copyLink() {
	const linkInput = document.getElementById('shareLink');
	navigator.clipboard.writeText(linkInput.value)
		.then(() => alert('Link copied!'))
		.catch(err => alert('Failed to copy link: ' + err));
}

const shareIcon = document.querySelector('.share-icon');
if (shareIcon) {
	shareIcon.addEventListener('click', openShareModal);
}
