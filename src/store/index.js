import { createStore } from "vuex";

export default createStore({
  state: {
    copySuccess: false,
    copyError: false,
    user: {
      name: "Emirhan Pala",
      email: "emrhnpla02@protonmail.com",
      about: "just a 16yo teenager",
    },
    links: [
      /*    { NO LONGER NEED THIS SHIT I HAD TO DELETE MY FUCKING REDDIT ACCOUNT FUCK YOU REDDIT
        websiteIcon: "fab fa-reddit",
        websiteIconColor: "#fe4400",
        websiteHref: "https://www.reddit.com",
        websiteName: "Reddit",
        userHref: "https://www.reddit.com/user/emrhnpla02",
        username: "u/emrhnpla02",
      }, */
      {
        websiteIcon: "fas fa-paw",
        websiteIconColor: "#000000",
        websiteHref: "https://lemmy.ml/",
        websiteName: "Lemmy",
        userHref: "https://lemmy.ml/u/emrhnpla02",
        username: "emrhnpla02",
      },
      /*     {
        websiteIcon: " fab fa-spotify",
        websiteIconColor: "#1CAE51",
        websiteHref: "https://www.spotify.com/",
        websiteName: "Spotify",
        userHref: "https://open.spotify.com/user/8s8mxqnkzgqak32l7tcnuzhs2",
        username: "emrhnpla02",
      }, */
      {
        websiteIcon: "fab fa-github",
        websiteIconColor: "#303443",
        websiteHref: "https://www.github.com",
        websiteName: "Github",
        userHref: "https://github.com/emrhnpla02",
        username: "emrhnpla02",
      },
      {
        websiteIcon: "fab fa-stack-overflow",
        websiteIconColor: "#EF7C21",
        websiteHref: "https://stackoverflow.com/",
        websiteName: "StackOverflow",
        userHref: "https://stackoverflow.com/users/17715826/emirhan-pala",
        username: "Emirhan Pala",
      },
      {
        websiteIcon: "fab fa-mastodon",
        websiteIconColor: "#3088D4",
        websiteHref: "https://mastodon.social/web/home",
        websiteName: "Mastodon",
        userHref: "https://mastodon.social/web/@emrhnpla02",
        username: "@emrhnpla02@mastodon.social",
      },
      {
        websiteIcon: "fab fa-medium-m",
        websiteIconColor: "#000000",
        websiteHref: "https://matrix.org/",
        websiteName: "Matrix",
        userHref: "https://matrix.to/#/@emrhnpla02:matrix.org",
        username: "@emrhnpla02",
      },
      /*{
        websiteIcon: "fab fa-youtube",
        websiteIconColor: "#fe0000",
        websiteHref: "https://www.youtube.com",
        websiteName: "YouTube",
        userHref: "https://www.youtube.com/channel/UCl8GSfwDjVTerJo_AZDLsqA",
        username: "Emirhan Pala",
      },*/ {
        websiteIcon: "fas fa-user-astronaut",
        websiteIconColor: "#ED176E",
        websiteHref: "https://odysee.com/",
        websiteName: "Odysee",
        userHref: "https://odysee.com/@emrhnpla02:5",
        username: "Emirhan P.",
      },
      /*    { who uses twitch these days anyway
        websiteIcon: "fab fa-twitch",
        websiteIconColor: "#954EFF",
        websiteHref: "https://www.twitch.tv/",
        websiteName: "Twitch",
        userHref: "https://www.twitch.tv/emrhnpla01",
        username: "emrhnpla01",
      }, */
      {
        websiteIcon: "fab fa-discord",
        websiteIconColor: "#5B66F0",
        websiteHref: "https://discord.com/",
        websiteName: "Discord",
        userHref: "https://discord.com/users/762040630099574784",
        username: "emrhnpla02#5625",
      },
      {
        websiteIcon: "fab fa-steam",
        websiteIconColor: "#177ECA",
        websiteHref: "https://store.steampowered.com/",
        websiteName: "Steam",
        userHref: "https://steamcommunity.com/id/emrhnpla02/",
        username: "emrhnpla02",
      },
    ],
  },
});