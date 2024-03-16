//create planet instance
const venus = extend(Planet, 'venus', sun,  {
    //make planet generator
    generator: new ErekirPlanetGenerator(),
    //make mesh, rest is self-explanatory
    meshLoader: () => new HexMesh(this, 5),
    cloudMeshLoader: () => new MultiMesh(
        new HexSkyMesh(this, 2, 0.15, 0.14, 5, Color.valueOf('eba768').a(0.75), 2, 0.42, 1, 0.43),
        new HexSkyMesh(this, 3, 0.6, 0.15, 5, Color.valueOf('eea293').a(0.75), 2, 0.42, 1.2, 0.45),
    ),
    //tells if you can go to the planet anytime
    alwaysUnlocked: true,
    //cloud color
    landCloudColor: Color.valueOf('ed6542'),
    //atmoshphere color
    atmosphereColor: Color.valueOf('f07218'),
    //default environment
    defaultEnv: Env.scorching | Env.terrestrial,
    //starting sector
    startSector: 1,
    //how much the atmosphere goes in
    atmosphereRadIn: 0.02,
    //how much the atmosphere goes out
    atmosphereRadOut: 0.03,
    //is planet tidal locked or not
    tidalLock: true,
    //how far planet is from parent
    orbitSpacing: 3,
    //the total radius of the planet
    totalRadius: totalRadius + 2.4,
    //light source to
    lightSrcTo: 0.5,
    //i pretty much dont know
    lightDstFrom: 0.2,
    //if sector returns to normal when you lose
    clearSectorOnLose: false,
    //planet's first core, example serpulo having core-shard
    defaultCore: "core-ember",
    //icon color
    iconColor: Color.valueOf("ff6347"),
    //self-explanatory
    enemyBuildSpeedMultiplier: 0.13,
    //if to allow launching to numbered sectors
    allowLaunchToNumbered = false, //wip disallowing
    //self-explanatory
    updateLighting = false, //should there be lighting
    //rules for the planet, like doing Vars.state.rules.rule = value
    ruleSetter = r => {
        //for rules, check
        /* https://github.com/Anuken/Mindustry
        /core/src/mindustry/game/Rules.java */
        r.waveTeam = Team.crux
        r.placeRangeCheck = false
        r.showSpawns = true
        r.fog = true
        r.staticFog = true
        r.lighting = false //change this when updateLighting is true
        r.coreDestroyClear = true
    }
    
});
//parameters you can't access with javascript
//what items to be banned and what items to be banned from planets
venus.hiddenItems.add(Items.serpuloItems, Items.erekirItems);
//self attributes, such as heat and other stuff
venus.defaultAttributes.set(Attribute.heat, 0.8);
//items & blocks unlocked when you land on the planet
venus.unlockedOnLand.add("core-ember");