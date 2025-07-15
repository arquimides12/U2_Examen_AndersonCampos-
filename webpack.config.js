const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Punto de entrada del proyecto
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist', // Servir los archivos estáticos desde la carpeta dist
    open: true, // Abrir el navegador automáticamente
    port: 8080, // Puerto en el que el servidor estará escuchando
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa index.html como plantilla
    }),
  ],
};
