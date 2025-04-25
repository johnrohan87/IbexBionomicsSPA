const isBrowser = typeof window !== 'undefined';


const pondBloom = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PondBloom.png')
  : 'IbexBionomics/Aquaculture/PondBloom.png';
const algaeBloom = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/AlgaeBloom.png')
  : 'IbexBionomics/Aquaculture/AlgaeBloom.png';
const pondReflecting = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PondReflecting.png')
  : 'IbexBionomics/Aquaculture/PondReflecting.png';
const plantSprout = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PlantSprout.png')
  : 'IbexBionomics/Aquaculture/PlantSprout.png';
const plantSeedling = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/PlantSeedling.png')
  : 'IbexBionomics/Aquaculture/PlantSeedling.png'; 
const waterSide = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/WaterSide.png')
  : 'IbexBionomics/Aquaculture/WaterSide.png';
const waterDroplet = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/WaterDroplet.png')
  : 'IbexBionomics/Aquaculture/WaterDroplet.png';
const waterDropletSide = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/WaterDropletSide.png')
  : 'IbexBionomics/Aquaculture/WaterDropletSide.png';
const leafDroplet = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/LeafDroplet.png')
  : 'IbexBionomics/Aquaculture/LeafDroplet.png';
const leafMidRib = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/LeafMidRib.jpg')
  : 'IbexBionomics/Aquaculture/LeafMidRib.jpg';
const shrimp = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/Shrimp.png')
  : 'IbexBionomics/Aquaculture/Shrimp.png';
const microorganisms = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/Microorganisms.jpg')
  : 'IbexBionomics/Aquaculture/Microorganisms.jpg';
const oilsLayered = isBrowser
  ? require('../../images/IbexBionomics/Aquaculture/OilsLayered.jpg')
  : 'IbexBionomics/Aquaculture/OilsLayered.jpg';


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
                  image: waterDropletSide || 'IbexBionomics/Aquaculture/WaterDropletSide.png',
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
        modeOfAction:
          "Stimulates beneficial microbes, promotes sludge degradation, eliminates toxic gases from silts.",
        modeOfUse:
          "Apply regularly to aquaculture systems for long-term sludge control.",
        badges: ["Microbial Health", "Sludge Control", "Aquaculture"],
        layoutBlocks: [
          {
            type: "HorizontalToVerticalDynamicCards4",
            props: {
              title: "MINERVIX Key Benefits",
              bg: "#e7f8ef",
              imgSize: "80px",
              items: [
                {
                  heading: "Reduces Organic Sludge",
                  text: "Drastically reduces buildup of organic materials from waste and uneaten feed.",
                  image: pondBloom || 'IbexBionomics/Aquaculture/PondBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Eliminates Toxic Gases",
                  text: "Prevents the formation of harmful gases like hydrogen sulfide, easing crop stress.",
                  image: algaeBloom || 'IbexBionomics/Aquaculture/AlgaeBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Improves Water Clarity",
                  text: "Stabilizes organic matter, enhancing visual clarity and flow performance.",
                  image: waterSide || 'IbexBionomics/Aquaculture/WaterSide.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Enhances Microbial Ecosystems",
                  text: "Supports proliferation of beneficial bacteria that outcompete pathogens.",
                  image: leafDroplet || 'IbexBionomics/Aquaculture/LeafDroplet.png',
                  imageStyle: "fadeTop"
                }
              ]
            }
          },
          {
            type: "PictureWithContent",
            props: {
              title: "MINERVIX: Advanced Microbial Support",
              text: "MINERVIX enhances microbial ecosystems by nutritionally stimulating biota, drastically reducing silts and organic sludge while eliminating clogging and toxic gas formation. Its consistent use improves survival rates and optimizes food conversion.",
              image: pondReflecting || 'IbexBionomics/Aquaculture/PondReflecting.png',
              bg: "#f9fafb",
              reverse: false,
              headingSize: "2.25rem",
              textSize: "1.05rem"
            }
          },
        ]
      },
      {
        id: "nu3zer",
        productKey: "nu3zer",
        title: "NU3ZER",
        description: "Photosynthesis booster and stress resilience enhancer",
        sector: "Agriculture",
        imageFilename: "IbexBionomics/Aquaculture/PlantSeedling.jpg",
        grabber: "Boosts yield, stress resistance, and energy storage in crops.",
        modeOfAction: "Increases photosynthetic and chemosynthetic efficiency, boosts metabolic transport, and activates stress resilience mechanisms.",
        modeOfUse: "Apply as foliar spray or in combination with fertilizers in field or greenhouse settings. Effective in organic and conventional systems.",
        badges: ["Photosynthesis", "Nutritional Optimization", "Stress Resistance", "Yield Enhancement"],
        layoutBlocks: [
          {
            type: "HorizontalToVerticalDynamicCards4",
            props: {
              title: "NU3ZER Key Benefits",
              bg: "#f0fdfa",
              imgSize: "80px",
              items: [
                {
                  heading: "Boosts Photosynthesis",
                  text: "Increases plant photosynthetic activity by up to 30%.",
                  image: plantSeedling || 'IbexBionomics/Aquaculture/PlantSeedling.jpg',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Enhances Stress Resistance",
                  text: "Strengthens resistance to drought, heat, cold, and salinity.",
                  image: algaeBloom || 'IbexBionomics/Aquaculture/AlgaeBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Improves Yield & Ripening",
                  text: "Promotes early harvest, improves fruit set, sugar content, and uniformity.",
                  image: leafDroplet || 'IbexBionomics/Aquaculture/LeafDroplet.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Optimizes Nutrient Use",
                  text: "Improves metabolite transport and energy storage within plant cells.",
                  image: plantSprout || 'IbexBionomics/Aquaculture/PlantSprout.jpg',
                  imageStyle: "fadeTop"
                }
              ]
            }
          },
          {
            type: "PictureWithContent",
            props: {
              title: "NU3ZER: Advanced Nutritional Bio-Optimization",
              text: "NU3ZER is a groundbreaking biostimulant that enhances nutrient efficiency, improves plant metabolic functions, and helps manage stress. Ideal for foliar or soil applications, it enhances energy conversion, metabolite movement, and photosynthetic performance.",
              image: waterSide || 'IbexBionomics/Aquaculture/WaterSide.png',
              bg: "#f9fafb",
              reverse: true,
              headingSize: "2.25rem",
              textSize: "1.05rem"
            }
          }
        ]
      },      
      {
        id: "x-blast",
        productKey: "x-blast",
        title: "X-BLAST",
        description: "Fractures and digests fats/oils in wastewater remediation",
        sector: "Environmental Remediation",
        imageFilename: "IbexBionomics/Aquaculture/Microorganisms.jpg",
        grabber: "Breaks down fats and oils, speeds up hydrocarbon degradation.",
        modeOfAction: "Micro-fractures organic molecules, accelerates biodegradation of hydrocarbons, reduces sludge.",
        modeOfUse: "Apply in treatment tanks or landfarming systems per contamination profile.",
        badges: ["Wastewater", "Fats & Oils", "Hydrocarbon Remediation"],
        layoutBlocks: [
          {
            type: "HorizontalToVerticalDynamicCards4",
            props: {
              title: "X-BLAST Core Applications",
              bg: "#edfdfb",
              imgSize: "80px",
              items: [
                {
                  heading: "Fat, Oil & Grease Breakdown",
                  text: "Rapidly fractures lipids in wastewater systems, easing biological degradation.",
                  image: oilsLayered || 'IbexBionomics/Aquaculture/OilsLayered.jpg',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Hydrocarbon Biodegradation",
                  text: "Accelerates microbial digestion of diesel, crude oil, and other hydrocarbons.",
                  image: algaeBloom || 'IbexBionomics/Aquaculture/AlgaeBloom.png',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Sludge Reduction",
                  text: "Reduces residual sludge volumes in treatment lagoons and systems.",
                  image: microorganisms || 'IbexBionomics/Aquaculture/Microorganisms.jpg',
                  imageStyle: "fadeTop"
                },
                {
                  heading: "Improves Drainage Performance",
                  text: "Prevents buildup in pipes and channels, improving flow and reducing maintenance.",
                  image: waterDropletSide || 'IbexBionomics/Aquaculture/WaterDropletSide.png',
                  imageStyle: "fadeTop"
                }
              ]
            }
          },
          {
            type: "PictureWithContent",
            props: {
              title: "X-BLAST: Biocatalytic Wastewater Breakthrough",
              text: "X-BLAST is a targeted biocatalyst that enhances the breakdown of fats, oils, and hydrocarbons in wastewater systems. It aids biological activity, accelerates organic decomposition, and minimizes sludge accumulation in both industrial and municipal applications.",
              image: waterSide || 'IbexBionomics/Aquaculture/WaterSide.png',
              bg: "#f9fafb",
              reverse: false,
              headingSize: "2.25rem",
              textSize: "1.05rem"
            }
          }
        ]
      }
];
module.exports = productList;