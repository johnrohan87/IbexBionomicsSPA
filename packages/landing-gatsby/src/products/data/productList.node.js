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
                imageKey: '/IbexBionomics/Aquaculture/PondBloom.png',
                imageStyle: "fadeTop"
              },
              {
                heading: "Reduces Feed & Energy",
                text: "Cuts feed and aeration energy costs by over 50%.",
                imageKey: '/IbexBionomics/Aquaculture/WaterDropletSide.png',
                imageStyle: "fadeTop"
              },
              {
                heading: "Controls Sludge",
                text: "Degrades organic waste and prevents toxic gas formation.",
                imageKey: '/IbexBionomics/Aquaculture/AlgaeBloom.png',
                imageStyle: "fadeTop"
              },
              {
                heading: "Organic Certified",
                text: "Meets global standards for organic aquaculture.",
                imageKey: '/IbexBionomics/Aquaculture/LeafDroplet.png',
                imageStyle: "fadeTop"
              }
            ]
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
      imageFilename: "minervix.png",
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
            icon: "/images/products/minervix.png",
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
      imageFilename: "nu3zer.png",
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
      imageFilename: "x-blast.png",
      grabber: "Breaks down fats and oils, speeds up hydrocarbon degradation.",
      modeOfAction: "Micro-fractures organic molecules, accelerates biodegradation of hydrocarbons, reduces sludge.",
      modeOfUse: "Apply in treatment tanks or landfarming systems per contamination profile.",
      badges: ["Wastewater", "Fats & Oils", "Hydrocarbon Remediation"]
    }
  ];
  
  module.exports = productList;  