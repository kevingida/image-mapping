"use client";
import React, { useState } from "react";
import ImageMapper from "react-image-mapper";

const ImagesMapper = () => {
  const [msg, setMsg] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState<string | null>(null);

  let MAP = {
    name: "my-map",
    areas: [
      {
        name: "office1",
        shape: "rect",
        coords: [1261, 839, 1480, 1021],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office2",
        shape: "rect",
        coords: [1042, 839, 1260, 1025],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office3",
        shape: "rect",
        coords: [305, 859, 523, 1025],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office4",
        shape: "rect",
        coords: [20, 542, 303, 785],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office5",
        shape: "rect",
        coords: [29, 29, 239, 207],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office6",
        shape: "rect",
        coords: [242, 29, 460, 211],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office7",
        shape: "rect",
        coords: [462, 27, 678, 209],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "office8",
        shape: "rect",
        coords: [824, 23, 1040, 208],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "boardroom",
        shape: "rect",
        coords: [23, 787, 301, 1023],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "reception",
        shape: "rect",
        coords: [523, 1026, 1038, 760],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "kitchen",
        shape: "rect",
        coords: [1261, 20, 1477, 211],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "toilet1",
        shape: "rect",
        coords: [1043, 23, 1258, 209],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "toilet2",
        shape: "rect",
        coords: [23, 353, 244, 540],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "garden",
        shape: "rect",
        coords: [415, 293, 1087, 757],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
      {
        name: "officePA",
        shape: "rect",
        coords: [1475, 837, 1150, 209],
        preFillColor: "#5af3cd26",
        fillColor: "#2bf3244c",
      },
    ],
  };

  var URL = "/floor-plan.png";

  const clicked = (area) => {
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  };

  const enterArea = (area) => {
    setHoveredArea(area);
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const leaveArea = (area) => {
    setHoveredArea(null);
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      "You moved on " +
        area.shape +
        " " +
        area.name +
        ' at coords {"x":' +
        coords.x +
        ',"y":' +
        coords.y +
        "} !"
    );
  };

  return (
    <div className="grid">
      <div className="presenter">
        <div style={{ position: "relative" }}>
          <ImageMapper
            src={URL}
            map={MAP}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
          />

          {hoveredArea && (
            <span className="tooltip">{hoveredArea && hoveredArea.name}</span>
          )}
        </div>

        <pre className="message">{msg ? msg : null}</pre>
        <pre>{moveMsg ? moveMsg : null}</pre>
      </div>
    </div>
  );
};

export default ImagesMapper;
