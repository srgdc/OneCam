module.exports = {
    "autoprefixerConfig": [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "android 4"
    ],
    "postcss": [],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "useJsLintAndHint": false,
    "jsPathsToConcatBeforeModulesJs": [],
    "lintJsCodeBeforeModules": false,
    "jsPathsToConcatAfterModulesJs": [],
    "lintJsCodeAfterModules": false,
    "useBabel": false,
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "browserSyncConfig": {
        "baseDir": "./dev",
        "port": 3004,
        "open": true,
        "browser": "default",
        "startUrl": "/index.html",
        "useNotifyInBrowser": true,
        "injectChanges": false
    },
    "removeConsoleLog": true,
    "minifyHtml": false,
    "staticPrefix": "static/",
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "handlebars",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img"
    }
};