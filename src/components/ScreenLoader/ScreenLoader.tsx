import * as React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export function ScreenLoader({ message }: { message?: String }) {
	return (
		<Dimmer active>
			<Loader>{message}</Loader>
		</Dimmer>
	);
}
