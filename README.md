## Including files

I am trying to include additional arbitrary JS files to my final compiled app.js and vendor.js bundles but I can't get it working.

* run `npm install && bower install`
* In my case I am trying to add the `bower_components/imagesloaded.pkgd.js` file inside `vendor.js` (NOTE: I know this is not the way to grab vendor files as I can just use `app.import('bower_components/imagesloaded.pkgd.js')` but I'm just using this as an example)
* I grab the file using `pickFiles` and then add it to `app` using `app.toTree()`.
* Run `ember build --environment production`
* Notice `imagesloaded.pkgd.js` is fingerprinted and added to `dist` but it isn't, bundled with vendor.js or not minified.
