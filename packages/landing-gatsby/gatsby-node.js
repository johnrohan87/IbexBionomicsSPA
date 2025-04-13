const path = require('path');
const fs = require('fs');

exports.onCreateWebpackConfig = ({ actions, stage, plugins, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });

  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig();

    const miniCss = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCss) {
      miniCss.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);

    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const productList = [
    {
      id: "hydrolife",
      title: "HYDROLIFE",
      description: "Organic plankton booster for aquaculture",
      sector: "Aquaculture",
      imageFilename: "hydrolife.png",
      grabber: "Boosts plankton growth for better aquaculture balance.",
      modeOfAction: "Stimulates chlorophyll and amylase production, enhances nutrient absorption, prevents toxic compound formation.",
      modeOfUse: "Add to aquaculture tanks or ponds according to water volume and treatment cycle.",
      badges: ["Aquaculture", "Plankton Booster", "Organic Certified"]
    },
    {
      id: "minervix",
      title: "MINERVIX",
      description: "Mineral complex that reduces sludge and supports microbial health",
      sector: "Aquaculture",
      imageFilename: "minervix.png",
      grabber: "Reduces sludge while enhancing microbial ecosystems.",
      modeOfAction: "Stimulates beneficial microbes, promotes sludge degradation, eliminates toxic gases from silts.",
      modeOfUse: "Apply regularly to aquaculture systems for long-term sludge control.",
      badges: ["Microbial Health", "Sludge Control", "Aquaculture"]
    },
    {
      id: "nu3zer",
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

  productList.forEach(product => {
    createNode({
      ...product,
      slug: `/products/${product.id}`,
      image___NODE: null,
      id: createNodeId(`ProductData-${product.id}`),
      internal: {
        type: "ProductData",
        contentDigest: createContentDigest(product)
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allProductData {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.allProductData.nodes.forEach(product => {
    createPage({
      path: product.slug,
      component: path.resolve("./src/products/ProductPage.js"),
      context: {
        id: product.id
      }
    });
  });

  createPage({
    path: "/products",
    component: path.resolve("./src/products/Products.js")
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ProductData implements Node {
      id: ID!
      title: String!
      description: String!
      grabber: String
      modeOfAction: String
      modeOfUse: String
      badges: [String]
      sector: String!
      slug: String!
      image: File @link(from: "image___NODE")
    }
  `);
};

exports.createResolvers = ({ createResolvers, context }) => {
  const resolvers = {
    ProductData: {
      image: {
        type: "File",
        resolve(source, args, context) {
          const imagePath = path.resolve(__dirname, "src/images/products", source.imageFilename || "");
          if (!fs.existsSync(imagePath)) return null;

          return context.nodeModel.runQuery({
            type: "File",
            query: {
              filter: {
                absolutePath: {
                  eq: imagePath
                }
              }
            },
            firstOnly: true
          });
        }
      }
    }
  };

  createResolvers(resolvers);
};