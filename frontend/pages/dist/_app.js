"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/styles.sass");
var navbar_1 = require("../components/navbar");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return React.createElement(React.Fragment, null,
        React.createElement("link", { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css", integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp", crossOrigin: "anonymous" }),
        React.createElement(navbar_1.NavBar, null),
        React.createElement(Component, __assign({}, pageProps)));
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
exports["default"] = MyApp;
