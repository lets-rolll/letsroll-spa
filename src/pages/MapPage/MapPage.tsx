import { Map, ObjectManager } from "@pbe/react-yandex-maps";
import data from "./data.json";

export function MapPage() {
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12,
    controls: ["zoomControl"],
  };

  return (
    <Map width={"100%"} height={"90vh"} state={mapState}>
      <ObjectManager
        options={{
          clusterize: true,
          gridSize: 32,
        }}
        objects={{
          openBalloonOnClick: true,
          preset: "islands#greenDotIcon",
        }}
        clusters={{
          preset: "islands#greenClusterIcons",
        }}
        features={data.features}
        modules={[
          "objectManager.addon.objectsBalloon",
          "objectManager.addon.objectsHint",
        ]}
      />
    </Map>
  );
}
