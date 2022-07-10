import { createStore } from "vuex";

export default createStore({
  state: {
    copySuccess: false,
    copyError: false,
    user: {
      name: "Emirhan Pala",
      email: "emrhnpla02@proton.me",
      about:
        "I'm a 17 year old Web Developer, Linux elitist who's interested in philosophy, music and nature.",
    },
    links: [
      {
        websiteIcon: "cib:matrix",
        websiteHref: "https://matrix.org",
        websiteName: "Matrix",
        userHref: "https://matrix.to/#/@emrhnpla02:matrix.org",
        username: "@emrhnpla02",
      },
      {
        websiteIcon: "logos:twitter",
        websiteHref: "https://twitter.com",
        websiteName: "Twitter",
        userHref: "https://twitter.com/emrhnpla02",
        username: "@emrhnpla02",
      },
      {
        websiteIcon: "logos:reddit-icon",
        websiteHref: "https://www.reddit.com",
        websiteName: "Reddit",
        userHref: "https://reddit.com/user/emrhnpla",
        username: "emrhnpla",
      },
      {
        websiteIcon: "openmoji:pixelfed",
        websiteHref: "https://www.pixelfed.org",
        websiteName: "Pixelfed",
        userHref: "https://pixelfed.social/emrhnpla",
        username: "@emrhnpla",
      },
      {
        websiteIcon: "logos:github-icon",
        websiteHref: "https://www.github.com",
        websiteName: "GitHub",
        userHref: "https://github.com/emrhnpla02",
        username: "emrhnpla02",
      },
      {
        websiteIcon: "logos:spotify-icon",
        websiteHref: "https://www.spotify.com",
        websiteName: "Spotify",
        userHref: "https://open.spotify.com/user/8s8mxqnkzgqak32l7tcnuzhs2",
        username: "emrhnpla02",
      },
    ],
  },
});
