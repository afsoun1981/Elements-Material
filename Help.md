Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
Requested ember-cli commands:

ng generate <blueprint> <options...>
  Generates new code from blueprints.
  aliases: g
  --dry-run (Boolean) (Default: false)
    aliases: -d
  --verbose (Boolean) (Default: false)
    aliases: -v
  --pod (Boolean) (Default: false)
    aliases: -p
  --classic (Boolean) (Default: false)
    aliases: -c
  --dummy (Boolean) (Default: false)
    aliases: -dum, -id
  --in-repo-addon (String) (Default: null)
    aliases: --in-repo <value>, -ir <value>


  Available blueprints:
    ng2:
      class <class-type>
      component <name> <options...>
        --flat (Boolean) (Default: false)
        --route (Boolean) (Default: false)
        --inline-template (Boolean) (Default: false)
          aliases: -it
        --inline-style (Boolean) (Default: false)
          aliases: -is
        --prefix (Boolean) (Default: true)
      component-test <name>
      directive <name> <options...>
        --flat (Boolean) (Default: true)
      enum <name>
      interface <interface-type>
      mobile <name> <options...>
        --source-dir (String) (Default: src)
          aliases: -sd <value>
        --prefix (String) (Default: app)
          aliases: -p <value>
        --mobile (Boolean) (Default: false)
      ng2 <name> <options...>
        --source-dir (String) (Default: src)
          aliases: -sd <value>
        --prefix (String) (Default: app)
          aliases: -p <value>
        --style (String) (Default: css)
        --mobile (Boolean) (Default: false)
      pipe <name> <options...>
        --flat (Boolean) (Default: true)
      route <name>
      route-test <name>
      service <name> <options...>
        --flat (Boolean) (Default: true)
      service-test <name>
    angular-cli:
      acceptance-test <name>
        Generates an acceptance test for a feature.
      adapter <name> <options...>
        Generates an ng-data adapter.
        --base-class (String)
      adapter-test <name>
        Generates an ng-data adapter unit test
      addon <name>
        The default blueprint for angular-cli addons.
      addon-import <name>
        Generates an import wrapper.
      app <name>
        The default blueprint for angular-cli projects.
      blueprint <name>
        Generates a blueprint and definition.
      component-addon <name>
        Generates a component. Name must contain a hyphen.
      controller <name>
        Generates a controller.
      controller-test <name>
        Generates a controller unit test.
      helper <name>
        Generates a helper function.
      helper-addon <name>
        Generates an import wrapper.
      helper-test <name>
        Generates a helper unit test.
      http-mock <endpoint-path>
        Generates a mock api endpoint in /api prefix.
      http-proxy <local-path> <remote-url>
        Generates a relative proxy to another server.
      in-repo-addon <name>
        The blueprint for addon in repo angular-cli addons.
      initializer <name>
        Generates an initializer.
      initializer-addon <name>
        Generates an import wrapper.
      initializer-test <name>
        Generates an initializer unit test.
      instance-initializer <name>
        Generates an instance initializer.
      instance-initializer-addon <name>
        Generates an import wrapper.
      instance-initializer-test <name>
        Generates an instance initializer unit test.
      lib <name>
        Generates a lib directory for in-repo addons.
      mixin <name>
        Generates a mixin.
      mixin-test <name>
        Generates a mixin unit test.
      model <name> <attr:type>
        Generates an ng-data model.
      model-test <name>
        Generates a model unit test.
      resource <name>
        Generates a model, template, route, and registers the route with the router.
      route-addon <name>
        Generates import wrappers for a route and its template.
      serializer <name>
        Generates an ng-data serializer.
      serializer-test <name>
        Generates a serializer unit test.
      server <name>
        Generates a server directory for mocks and proxies.
      template <name>
        Generates a template.
      test-helper <name>
        Generates a test helper.
      transform <name>
        Generates an ng-data value transform.
      transform-test <name>
        Generates a transform unit test.
      util <name>
        Generates a simple utility module/function.
      util-test <name>
        Generates a util unit test.
      vendor-shim <name>
        Generates an ES6 module shim for global libraries.

