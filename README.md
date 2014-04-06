This repository demonstrates how to split a Backbone application.

The goal is to split the application into:

* `main` bundle which contains the core of the application and only
  renders a "main" view (called `views/app` here),

* and a `secondary` bundle which contains all other views.

The `secondary` bundle should be loaded only as needed. In this
application this means that it should be loaded only when the `foo` or
`bar` views are used, and not before.

The `index.html` file loads the application, unoptimized.

The `index-optimized.html` file loads the optimized application.

Building the optimized version:

    $ bower install
    $ r.js -o build.js

The key points:

1. The view in `views/app` is the "main" view of the
   application. Loading it instantiates and renders the view right
   away.

2. The `js/router` module does not use the other views directly. It
   calls `require` to load the view first. **This makes the `foo` and
   `bar` function asynchronous.**

3. This is the part of the `build.js` file that divides the
   application into two bundles:

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

4. The optimized version needs an initial configuration like this:

          bundles: {
             "secondary": ["views/foo", "views/bar"]
          }

  This tells RequireJS that the modules `views/foo` and `views/bar`
  are loaded by loading `secondary`.

To test the application:

* Load `index-optimized.html`.  You'll see `app rendered 0`, showing
  that the core is loaded and able to render the main view.

* Add `#foo` to the URL. You'll see `foo rendered 0`, showing that the `foo`
  view was loaded and rendered.

* Add `#bar` to the URL. You'll see `bar rendered 0`, showing that the `bar`
  view was loaded and rendered.

The numbers are just counters. The views `foo` and `bar` can be
rendered more than once by adding random parameters after the hash
component. So if you ask for `index-optimized.html#foo` and then
`index-optimized.html#foo?blah` you should get a count of 1 on the 2nd
URL.
