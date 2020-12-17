import React from "react";
import { fabric } from "fabric";

export default function FabricCanvas() {
	let canvas = new fabric.Canvas("mainCanvas", {
		width: 500,
		height: 500,
		backgroundColor: "red",
	});

	return (
		<div
			style={{ display: "flex", justifyContent: "center", alignContent: "center" }}
		>
			<canvas id="mainCanvas" />
		</div>
	);
}
