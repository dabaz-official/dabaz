import { spawn } from "child_process";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile page={0} renderContent={({ progress }) => (
        <span className="text-9xl">Foo {progress}</span>
      )}
      >
      </Tile>
    </TileContent>
    <TileContent>Foo</TileContent>
    <TileContent>Foo</TileContent>
  </TileWrapper>
)

export default Works