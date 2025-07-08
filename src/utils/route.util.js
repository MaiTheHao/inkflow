export function isActiveLink(linkTo, currentPath) {
	if (linkTo === '/') {
		return currentPath === '/';
	}

	if (currentPath === linkTo) return true;

	if (
		currentPath.startsWith(linkTo) &&
		(currentPath.charAt(linkTo.length) === '/' ||
			currentPath.charAt(linkTo.length) === '' ||
			currentPath.charAt(linkTo.length) === undefined)
	) {
		return linkTo.split('/').length >= currentPath.split('/').length;
	}

	return false;
}
