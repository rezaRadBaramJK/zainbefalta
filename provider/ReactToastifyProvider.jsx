"use client";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastifyProvider = () => {
	return (
		<ToastContainer
			position="top-center"
			className={"toast-position"}
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={true}
			closeOnClick={true}
			rtl={false}
			draggable={true}
			pauseOnHover={false}
			theme="colored"
			transition={Bounce}
		/>
	);
};

export default ReactToastifyProvider;