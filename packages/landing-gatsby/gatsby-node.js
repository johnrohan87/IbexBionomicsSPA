const path = require('path');
const fs = require('fs');

const EventEmitter = require('events');
EventEmitter.defaultMaxListeners = 20;

const productList = require('./src/products/data/productList');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  productList.forEach(product => {
    createNode({
      ...product,
      productKey: product.id,
      slug: `/products/${product.id}`,
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
          productKey
        }
      }
    }
  `);

  result.data.allProductData.nodes.forEach(product => {
    const productMeta = productList.find(p => p.productKey === product.productKey);
    if (!productMeta) {
      console.warn(`⚠️ Product metadata not found for: ${product.productKey}`);
    } else {
      console.log(`🔍 Creating page for: ${product.productKey}, layoutBlocks: ${productMeta.layoutBlocks?.length || 0}`);
    }
    createPage({
      path: product.slug,
      component: path.resolve("./src/products/ProductPage.js"),
      context: {
        id: product.id,
        layoutBlocks: productMeta?.layoutBlocks || [],
      }
    });
  });

  createPage({
    path: "/products",
    component: path.resolve("./src/products/Products.js")
  });
};