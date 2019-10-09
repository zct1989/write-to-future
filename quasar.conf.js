module.exports = function(ctx) {
  return {
    animations: ['fadeIn', 'fadeOut'],
    extras: [],
    framework: {
      config: {
        brand: {
          primary: '#ffffff'
        }
      },
      components: ['QAvatar', 'QBtn'],
      directives: ['ClosePopup'],
      plugins: [],
      iconSet: 'fontawesome-v5',
      cssAddon: true
    },
    supportIE: true
  }
}
