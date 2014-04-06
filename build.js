({
    baseUrl: "js",
    dir: "build",
    mainConfigFile: "js/main.js",
    findNestedDependencies: false,
    removeCombined: true,
    modules: [
        {
            name: "main"
        },
        {
            name: "secondary",
            // There no module named secondary in the source, so create it.
            create: true,
            // Make sure to include all the views other than the main one.
            include: [
                "views/foo",
                "views/bar"
            ],
            // Exclude everything we've included in `main`.
            exclude: ["main"]
        }
    ]
})
