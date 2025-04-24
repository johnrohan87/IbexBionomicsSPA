const isBrowser = typeof window !== 'undefined';


const pondBloom = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PondBloom.png')
  : 'IbexBionomics/Aquaculture/PondBloom.png';
const waterDrop = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/WaterDropletSide.png')
  : 'IbexBionomics/Aquaculture/WaterDropletSide.png';
const algaeBloom = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/AlgaeBloom.png')
  : 'IbexBionomics/Aquaculture/AlgaeBloom.png';
const leafDroplet = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/LeafDroplet.png')
  : 'IbexBionomics/Aquaculture/LeafDroplet.png';
const waterSide = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/WaterSide.png')
  : 'IbexBionomics/Aquaculture/WaterSide.png';
const pondReflecting = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PondReflecting.png')
  : 'IbexBionomics/Aquaculture/PondReflecting.png';
const shrimp = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/Shrimp.png')
  : 'IbexBionomics/Aquaculture/Shrimp.png';


const productList = [
    {
        id: "hydrolife",
        productKey: "hydrolife",
        title: "HYDROLIFE",
        description: "Organic plankton booster for aquaculture",
        sector: "Aquaculture",
        imageFilename: "IbexBionomics/Aquaculture/WaterSide.png",
        grabber: "Boosts plankton growth for better aquaculture balance.",
        modeOfAction:
          "Stimulates chlorophyll and amylase production, enhances nutrient absorption, prevents toxic compound formation.",
        modeOfUse:
          "Add to aquaculture tanks or ponds according to water volume and treatment cycle.",
        badges: ["Aquaculture", "Plankton Booster", "Organic Certified"],
        layoutBlocks: [
          {
            type: "HorizontalToVerticalDynamicCards4",
            props: {
              title: "HYDROLIFE Core Benefits",
              bg: "#f0fdf4",
              imgSize: "80px",
              items: [
                {
                  heading: "Boosts Plankton",
                  text: "Stimulates phyto- and zooplankton growth for improved nutrition.",
                  image: pondBloom || 'IbexBionomics/Aquaculture/PondBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Reduces Feed & Energy",
                  text: "Cuts feed and aeration energy costs by over 50%.",
                  image: waterDrop || 'IbexBionomics/Aquaculture/WaterDropletSide.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Controls Sludge",
                  text: "Degrades organic waste and prevents toxic gas formation.",
                  image: algaeBloom || 'IbexBionomics/Aquaculture/AlgaeBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Organic Certified",
                  text: "Meets global standards for organic aquaculture.",
                  image: leafDroplet || 'IbexBionomics/Aquaculture/LeafDroplet.png',
                  imageStyle: "fadeTop"
                }
              ]
            }
          },
          {
            type: "PictureWithContent",
            props: {
              title: "HYDROLIFE: Natural Nutritional Balance",
              text: "HYDROLIFE stimulates chlorophyll production, enhances nutrient absorption, and accelerates the growth of plankton that fish and crustaceans can consume directly—reducing commercial feed dependency and improving aquaculture sustainability.",
              image: shrimp || 'IbexBionomics/Aquaculture/Shrimp.png',
              bg: "#f9fafb",
              reverse: true,
              headingSize: "2.25rem",
              textSize: "1.05rem"
            }
          }
        ]
      },
      {
        id: "minervix",
        productKey: "minervix",
        title: "MINERVIX",
        description: "Mineral complex that reduces sludge and supports microbial health",
        sector: "Aquaculture",
        imageFilename: "IbexBionomics/Aquaculture/PondReflecting.png",
        grabber: "Reduces sludge while enhancing microbial ecosystems.",
        modeOfAction: "Stimulates beneficial microbes, promotes sludge degradation, eliminates toxic gases from silts.",
        modeOfUse: "Apply regularly to aquaculture systems for long-term sludge control.",
        badges: ["Microbial Health", "Sludge Control", "Aquaculture"],
        layoutBlocks: [
          {
            type: "PictureWithContent",
            props: {
              title: "MINERVIX: Advanced Microbial Support",
              text: "MINERVIX enhances microbial ecosystems, reduces sludge, and restores clarity.",
              image: pondReflecting || 'IbexBionomics/Aquaculture/PondReflecting.png',
              bg: "#f9fafb",
              reverse: false,
              headingSize: "2.25rem",
              textSize: "1.05rem"
            }
          }
        ]
      },
      {
        id: "nu3zer",
        productKey: "nu3zer",
        title: "NU3ZER",
        description: "Photosynthesis booster and stress resilience enhancer",
        sector: "Agriculture",
        imageFilename: "IbexBionomics/Aquaculture/PondBloom.png",
        grabber: "Boosts yield, stress resistance, and energy storage in crops.",
        modeOfAction: "Enhances photosynthesis and chemosynthesis, improves metabolite transport, promotes enzyme production.",
        modeOfUse: "Use as base with nutritional formulas or foliar spray; suitable for all agricultural systems.",
        badges: ["Photosynthesis", "Yield Booster", "Stress Resistance"]
      },
      {
        id: "x-blast",
        productKey: "x-blast",
        title: "X-BLAST",
        description: "Fractures and digests fats/oils in wastewater remediation",
        sector: "Environmental Remediation",
        imageFilename: "IbexBionomics/Aquaculture/PondBloom.png",
        grabber: "Breaks down fats and oils, speeds up hydrocarbon degradation.",
        modeOfAction: "Micro-fractures organic molecules, accelerates biodegradation of hydrocarbons, reduces sludge.",
        modeOfUse: "Apply in treatment tanks or landfarming systems per contamination profile.",
        badges: ["Wastewater", "Fats & Oils", "Hydrocarbon Remediation"]
      }
];
module.exports = productList;