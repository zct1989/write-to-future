module.exports = function(ctx) {
  return {
    animations: ['fadeIn', 'fadeOut'],
    extras: ['fontawesome-v5'],
    framework: {
      components: ['QAvatar', 'QBtn'],
      directives: ['ClosePopup'],
      plugins: [],
      config: {
        brand: {
          primary: '#ffffff'
        }
      },

      iconSet: 'fontawesome-v5',
      cssAddon: true
    },
    supportIE: true
  }
}
