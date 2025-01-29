import { Suspense } from "react";
import Callback from "./callback";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Callback />
		</Suspense>
	);
}
