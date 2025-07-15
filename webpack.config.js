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
  module: {
    rules: [
      // Regla para manejar archivos JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar babel para compilar el JS
        },
      },
      // Regla para manejar archivos de imagen
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader', // Usar file-loader para procesar las imágenes
            options: {
              name: '[name].[hash].[ext]', // Nombre del archivo con hash para evitar colisiones
              outputPath: 'images/', // Salida en la carpeta 'images'
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa index.html como plantilla
    }),
  ],
};
