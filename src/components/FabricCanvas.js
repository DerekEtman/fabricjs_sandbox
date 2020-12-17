import React from "react";
import { fabric } from "fabric";
import minaPicture from "../img/Mina_6.jpg";

export default function FabricCanvas() {
	let initialWidth = 961;
	let initialHeight = 400;
	const dropAdd = document.getElementById("canvasWrapper");
	let canvas = new fabric.Canvas("mainCanvas", {
		width: initialWidth,
		height: initialHeight,
        backgroundColor: "blue",
        preserveObjectStacking:true,
    });
    

	var rect = new fabric.Rect({
		left: 100,
		top: 100,
		fill: "red",
		width: 20,
		height: 20,
        selectable: true,
	});

	const handleSaveSVG = (event) => {
		event.preventDefault();
		console.log(canvas.toSVG());
    };
    
    const addSquare = (event) => {
        event.preventDefault();
        canvas.add(rect);
    }

	const addImage = (event) => {
        event.preventDefault();
        
        fabric.Image.fromURL(minaPicture, function(oImg) {
            // scale image down, and flip it, before adding it onto canvas
            oImg.scale(-0.1).set("flipY", false);
            oImg.set("selectable", true);
            canvas.add(oImg);
          })
	};

	window.onresize = function resizeCanvas() {
		const canvasContianer = document.getElementById("canvasWrapper");

		const ratio = canvas.getWidth() / canvas.getHeight();
		const containerWidth = canvasContianer.clientWidth;
		const containerHeight = canvasContianer.clientHeight;

		const scale = containerWidth / canvas.getWidth();
		const zoom = canvas.getZoom() * scale;

		canvas.setDimensions({
			width: containerWidth,
			height: containerWidth / ratio,
		});

		canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    };
    
    canvas.on("mouse:move", (e) => {
        console.log(e)
    })

    // canvas.requestRenderAll();
	return (
		<div id="canvasWrapper">
			<canvas id="mainCanvas" />
			<button onClick={handleSaveSVG}>Save as SVG</button>
			<button onClick={addImage}>Add Image</button>
            <button onClick={addSquare}>Add Square</button>
		</div>
	);
}
