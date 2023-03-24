module.exports = {
  name: 'shop',
  exposes: {
    './Module': 'packages/shop/src/app/remote-entry/entry.module.ts',
  },
};
