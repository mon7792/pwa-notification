import { useState } from "react";

const PermissionBtn = () => {
	const [permission, setPermission] = useState<NotificationPermission>();

	const requestPermission = () => {
		Notification.requestPermission().then((permission) => {
			setPermission(permission);
		});
	};

	const showNotifications = () => {
		return new Notification("Hello! 🦔", {
			body: "Welcome to the club!",
			icon: "/icon-256.png",
		});
	};

	if (!("Notification" in window)) {
		alert("This browser does not support notifications.");
		return;
	}

	const renderButton = () => {
		if (permission === "granted") {
			return (
				<button type="button" onClick={showNotifications}>
					Show Notifications 🥳
				</button>
			);
		}
		return (
			<button type="button" onClick={requestPermission}>
				Show Notifications 🫣
			</button>
		);
	};

	return renderButton();
};

export default PermissionBtn;
