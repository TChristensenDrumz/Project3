import React from "react";
import Canvas from "../game/GameLogic";
import LevelLogic from "../utils/LevelLogic";
import Dino from "../game/assets/sprites/DinoSprites-doux.png";

let { background, audio } = LevelLogic.enemyGenre();

export const Home = () => {
    return (
        <Canvas
            player={Dino}
            enemy={Dino}
            bossLevel={false}
            enemyAmount={0}
            background={LevelLogic.homeGenre().background.home}
            audio={LevelLogic.homeGenre().audio.home}
            nextLevel="/harmony/level1"
        />
    );
};

export const Level1 = () => {
    localStorage.setItem("currentLevel", JSON.stringify("0"));
    return (
        <Canvas
            player={Dino}
            enemy={Dino}
            bossLevel={false}
            enemyAmount={3}
            background={background.level1}
            audio={audio.level1}
            nextLevel="/harmony/level2"
        />
    );
};

export const Level2 = () => {
    return (
        <Canvas
            player={Dino}
            enemy={Dino}
            bossLevel={false}
            enemyAmount={5}
            background={background.level2}
            audio={audio.level2}
            nextLevel="/harmony/level3"
        />
    );
};

export const Level3 = () => {
    return (
        <Canvas
            player={Dino}
            enemy={Dino}
            bossLevel={false}
            enemyAmount={7}
            background={background.level3}
            audio={audio.level3}
            nextLevel="/harmony/bossroom"
        />
    );
};

export const BossRoom = () => {
    return (
        <Canvas
            player={Dino}
            enemy={Dino}
            bossLevel={true}
            enemyAmount={1}
            background={background.bossroom}
            audio={audio.bossroom}
            nextLevel="/harmony"
        />
    );
};