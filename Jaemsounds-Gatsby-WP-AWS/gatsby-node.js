const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        query getPages {
          wordpress {
            pages {
              edges {
                node {
                  id
                  content
                  slug
                  status
                  title
                }
              }
            }
          }
        }
      `,
    )
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const pageTemplate = path.resolve('./src/templates/page.js');
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.wordpress.pages.edges, (edge) => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            path: `/page/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          });
        });
      })
      // ==== END PAGES ====
      // ==== Stories (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            query getVideos {
              wordpress {
                videos {
                  edges {
                    node {
                      content
                      date
                      link
                      title
                      slug
                      videoUrl {
                        video
                      }
                    }
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const videoTemplate = path.resolve('./src/templates/video.js');
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wordpress.videos.edges, (edge) => {
            createPage({
              path: `/video/${edge.node.slug}/`,
              component: slash(videoTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END Videos ====
      // ==== Stories (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            query getallAlbums {
              wordpress {
                albums {
                  edges {
                    node {
                      title
                      slug
                      albumTracks {
                        track {
                          cover {
                            mediaItemUrl
                          }
                          file {
                            mediaItemUrl
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const albumTemplate = path.resolve('./src/templates/album.js');
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wordpress.albums.edges, (edge) => {
            createPage({
              path: `/album/${edge.node.slug}/`,
              component: slash(albumTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END Videos ====
      // ==== Stories (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            query getBeats {
              wordpress {
                beats {
                  edges {
                    node {
                      slug
                      title
                      content
                      beatsInfo {
                        title
                        price
                        cover {
                          mediaItemUrl
                        }
                        track {
                          mediaItemUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const beatTemplate = path.resolve('./src/templates/beat.js');
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wordpress.beats.edges, (edge) => {
            createPage({
              path: `/beat/${edge.node.slug}/`,
              component: slash(beatTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END Videos ====
      // ==== Stories (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            query getPosts {
              wordpress {
                posts {
                  edges {
                    node {
                      content
                      date
                      link
                      title
                      slug
                      excerpt
                      featuredImage {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          `,
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const postTemplate = path.resolve('./src/templates/post.js');
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wordpress.posts.edges, (edge) => {
            createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: edge.node,
            });
          });
          resolve();
        });
      });
    // ==== END POSTS ====
  });
};
