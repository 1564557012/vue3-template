module.exports = {
	extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss"
  ],
  overrides: [
		// 项目中scss文件，添加以下配置
		{
			files: ['*.scss', '**/*.scss'],
			customSyntax: 'postcss-scss',
			extends: ['stylelint-config-recommended-scss'],
		}
	],
};