const eventResizestart = new Event('resizestart');
const eventResizestop = new Event('resizestop');

export default function (element = window, stopDelay = 200, isResizing = 'isResizing') {
	function eventHandler() {
		if (!element[isResizing]) {
			element.dispatchEvent(eventResizestart);
			element[isResizing] = true;
		}

		clearTimeout(element.resizestopTimoutId);
		element.resizestopTimoutId = setTimeout(function () {
			element.dispatchEvent(eventResizestop);
			element[isResizing] = false;
		}, stopDelay);
	}

	element.removeEventListener('resize', eventHandler);
	element.addEventListener('resize', eventHandler);
}