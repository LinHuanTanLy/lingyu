## 项目步骤
1. 支持less

    ```
    npm run eject
   ```
   增加less依赖：
    ```
   npm install --save-dev less less-loader
   ```
   修改webpack.config.js
   ```
   const cssRegex = /\.css$/;
   const cssModuleRegex = /\.module\.css$/;
   const sassRegex = /\.(scss|sass)$/;
   const sassModuleRegex = /\.module\.(scss|sass)$/;
   ```
   替换为
   ```
   const cssRegex = /\.css$/;
   const cssModuleRegex = /\.module\.css$/;
   const sassRegex = /\.(scss|sass)$/;
   const sassModuleRegex = /\.module\.(scss|sass)$/;
   const lessRegex = /\.less$/;
   const lessModuleRegex = /\.module\.less$/;
   ```
   增加配置：
   ```
       {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                  {
                    importLoaders: 3,
                    sourceMap: isEnvProduction
                        ? shouldUseSourceMap
                        : isEnvDevelopment,
                    modules: {
                      mode: 'icss',
                    },
                  },
                  'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                  {
                    importLoaders: 3,
                    sourceMap: isEnvProduction
                        ? shouldUseSourceMap
                        : isEnvDevelopment,
                    modules: {
                      mode: 'local',
                      getLocalIdent: getCSSModuleLocalIdent,
                    },
                  },
                  'less-loader'
              ),
            },
   ```
   
2. 增加网络配置
   运行
   ```
   npm install --save axios
   ```
3. 增加路由配置
```
npm install --save react-router-dom
```