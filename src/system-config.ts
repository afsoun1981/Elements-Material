/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  '@vaadin': 'vendor/@vaadin'
};

/** User packages configuration. */
const materialPackages:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'radio',
  'checkbox'
];

const packages:any = createCustomConfig(materialPackages);

function createCustomConfig(packages: string[]): any {
  return packages.reduce((packageConfig: any, packageName: string) => {
    packageConfig[`@angular2-material/${packageName}`] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: packageName
    };
    return packageConfig;
  }, {});
}

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/components/el-proto-app',
  'app/components/el-toolbar',
  'app/components/el-badge-button',
  'app/components/el-erwin',
  'app/components/el-menu',
  'app/components/el-sidenav-button',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

// Vaadin
cliSystemConfigPackages['@vaadin/angular2-polymer'] = { main: 'index.js', defaultExtension: 'js' };

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@vaadin': 'vendor/@vaadin',
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
