const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const findWorkspaceRoot = require('find-yarn-workspace-root');

const workspaceRoot = findWorkspaceRoot(__dirname);
const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

config.resolver.resolverMainFields = [
  'sbmodern',
  ...config.resolver.resolverMainFields,
];

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

config.watchFolders = [...config.watchFolders, './.ondevice'];

module.exports = config;
