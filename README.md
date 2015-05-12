# View Source extension

This simple extension adds a new menu item called "View Source" in Content Studio, bound to Ctrl+U.

# Installation instructions

## Developer mode (for you only)

1. Make a directory to hold the extension (and possibly more extensions) The reason for this is explained in the [Content Studio Integration Guide](http://docs.escenic.com/ece-cs-plugin-guide/5.7/making_a_development_environment.html)

  ```
  mkdir cs-extensions
  ```

2. clone the repository to your local machine into this directory

  ```
  cd cs-extensions
  git clone https://github.com/escenic/cs-extension-view-source.git
  ```

3. start Content Studio from the command line with an additional parameter instructing it to load extensions from the directory you created in step 1:

  ```
  javaws http://content-engine-host/studio/Studio.jnlp?com.escenic.script.root=/path/to/cs-extensions
  ```

4. Inside Content Studio, open the Debug menu (see the bottom of [this page](http://docs.escenic.com/ece-cs-plugin-guide/5.7/making_a_development_environment.html) from the Integration Guide), and enable the "Developer Mode" — This will enable all extensions in the folder specified.


## Server installation (for everyone)

This is explained in more detail in the [section on deploying extensions](http://docs.escenic.com/ece-cs-plugin-guide/5.7/deploying_your_extensions.html) in the Integration Guide.

1. Make the directory `/opt/escenic/engine/studio/extensions` on the Content Studio server

  ```
  mkdir -p /opt/escenic/engine/studio/extensions
  ```

2. Clone the repository into it

  ```
  cd /opt/escenic/engine/studio/extensions
  git clone https://github.com/escenic/cs-extension-view-source.git
  ```

3. Start Content Studio as normal.  Note, however that caching policies on the main webservice endpoint may cause the extension not to appear immediately, since Content Studio will cache the web service endpoint. If this happens do a File → Refresh and then restart Content Studio

## For only some

You can, if you want, install the extension but leave it as disabled, only enabling it if you pass the com.escenic.studio.extension.enable request parameter to Content Studio:

1. Do a "Server" installation as above
2. Remove the "autoinstall" flag from the `package.json`
3. To enable it for one user, run Content Studio using `javaws http://content-engine-host/studio/Studio.jnlp?com.escenic.studio.extension.enable=view-source`

