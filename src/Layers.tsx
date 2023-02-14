import { Button, CloseButton, HStack, Stack, Tag, Wrap } from "@chakra-ui/react";
import React from "react";

import ReactiveCanvas from "./Canvas";
import { randomColor, randomSortedPairs } from "./Util";

const CANVAS_WIDTH = 1000;

const Layers = () => {
  const [layers, setLayers] = React.useState<LayerData[]>([]);

  const addLayer = (points: [number, number][]) => {
    setLayers([...layers, { points, color: randomColor() }]);
  };

  return (
    <HStack spacing={8} align="start" m={16}>
      <ReactiveCanvas width={CANVAS_WIDTH} height={400} data={layers} />
      <Stack w={300} spacing={8}>
        <HStack spacing={2}>
          <Button onClick={() => addLayer([[0, CANVAS_WIDTH]])}>Add Layer</Button>
          <Button
            onClick={() => {
              addLayer(randomSortedPairs(CANVAS_WIDTH, 3));
            }}
          >
            Add Bumpy Layer
          </Button>
        </HStack>
        <Stack>
          {layers.map((layer, i) => (
            <HStack key={i} p={1} border="1px solid gray" justify="space-between">
              <Wrap spacing={2} px={1}>
                {layer.points.map((point, j) => (
                  <Tag key={j}>
                    {point[0]}, {point[1]}
                  </Tag>
                ))}
              </Wrap>
              <CloseButton
                onClick={() => setLayers([...layers.slice(0, i), ...layers.slice(i + 1)])}
              />
            </HStack>
          ))}
        </Stack>
      </Stack>
    </HStack>
  );
};

export default Layers;
