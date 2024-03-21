const embercore = extend(CoreBlock, 'core-ember', {
    size: 2,
    description: 'Core of the base. Armored. Made with tungsten. Once destroyed, the sector is lost.',
    health: 2500,
    isFirstTier: true,
    unitType: flame,
});

const thermodrill = extend(ImpactDrill, 'thermo-drill', {
    //TODO add logic and properties
});

module.exports = { embercore, thermodrill }