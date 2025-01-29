"use client";

import React from "react";

export default function LoginButton() {
	const handleLogin = () => {
		window.location.href = "http://localhost:8081/api/v1/auth/login";
	};

	return (
		<button
			onClick={handleLogin}
			className="rounded-md border border-solid px-10 py-4 hover:bg-grey-50"
		>
			Googleでログイン
		</button>
	);
}
