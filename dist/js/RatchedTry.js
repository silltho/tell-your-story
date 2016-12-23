/**
 * Created by Maxi on 19.12.16.
 */
!(function () {
	'use strict';

	var eventModalOpen = new CustomEvent('modalOpen', {
		bubbles: true,
		cancelable: true
	});
	var eventModalClose = new CustomEvent('modalClose', {
		bubbles: true,
		cancelable: true
	});
	var findModals = function (target) {
		var i;
		var modals = document.querySelectorAll('a');

		for (; target && target !== document; target = target.parentNode) {
			for (i = modals.length; i--;) {
				if (modals[i] === target) {
					return target;
				}
			}
		}
	};

	var getModal = function (event) {
		var modalToggle = findModals(event.target);
		if (modalToggle && modalToggle.hash) {
			return document.querySelector(modalToggle.hash);
		}
	};

	window.addEventListener('touchend', function (event) {
		var modal = getModal(event);
		if (modal && modal.classList.contains('modal')) {
			var eventToDispatch = eventModalOpen;
			if (modal.classList.contains('active')) {
				eventToDispatch = eventModalClose;
			}
			modal.dispatchEvent(eventToDispatch);
			modal.classList.toggle('active');
		}
		event.preventDefault(); // prevents rewriting url (apps can still use hash values in url)
	});
}());

!(function () {
	'use strict';

	var popover;

	var findPopovers = function (target) {
		var i;
		var popovers = document.querySelectorAll('a');

		for (; target && target !== document; target = target.parentNode) {
			for (i = popovers.length; i--;) {
				if (popovers[i] === target) {
					return target;
				}
			}
		}
	};

	var onPopoverHidden = function () {
		popover.style.display = 'none';
		popover.removeEventListener(window.RATCHET.getTransitionEnd, onPopoverHidden);
	};

	var backdrop = (function () {
		var element = document.createElement('div');

		element.classList.add('backdrop');

		element.addEventListener('touchend', function () {
			popover.addEventListener(window.RATCHET.getTransitionEnd, onPopoverHidden);
			popover.classList.remove('visible');
			popover.parentNode.removeChild(backdrop);
		});

		return element;
	}());

	var getPopover = function (e) {
		var anchor = findPopovers(e.target);

		if (!anchor || !anchor.hash || (anchor.hash.indexOf('/') > 0)) {
			return;
		}

		try {
			popover = document.querySelector(anchor.hash);
		} catch (error) {
			popover = null;
		}

		if (popover === null) {
			return;
		}

		if (!popover || !popover.classList.contains('popover')) {
			return;
		}

		return popover;
	};

	var showHidePopover = function (e) {
		var popover = getPopover(e);

		if (!popover) {
			return;
		}

		popover.style.display = 'block';
		popover.offsetHeight;
		popover.classList.add('visible');

		popover.parentNode.appendChild(backdrop);
	};

	window.addEventListener('touchend', showHidePopover);

}());