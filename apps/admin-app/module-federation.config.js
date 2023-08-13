module.exports = {
  name: 'admin-app',
  exposes: {
    './Module': 'apps/admin-app/src/app/remote-entry/entry.module.ts',
  },
};
