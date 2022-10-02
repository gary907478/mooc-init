#!/bin/sh
# This script is used to initialize the MOOC environment

# remove default componentss
rm -r ./components/*

# 安装sass依赖
npm i sass sass-loader@10.1.1 @nuxtjs/style-resources

# 安装postcss8依赖
npm i -D @nuxt/postcss8

# 安装i18n依赖 (Optional)
echo "*** 是否需要安装i18n？(y/n) ***"
read i18n
if [ $i18n = "y" ] 
then
  # npm i @nuxtjs/i18n
  echo "成功安装@nuxtjs/i18n"
  cp -fr ./mooc-init/configs/i18n.js ./nuxt.config.js
elif [ $i18n = "n" ] 
then
  echo "跳过i18n安装"
  cp -fr ./mooc-init/configs/general.js ./nuxt.config.js
fi

# initialize layouts directory
cp -fr ./mooc-init/layouts ./
# initialize pages directory
cp -fr ./mooc-init/pages ./
# initialize locales directory
cp -fr ./mooc-init/locales ./
# initialize static directory
cp -fr ./mooc-init/static ./
# initialize plugins directory
cp -fr ./mooc-init/plugins ./
# initialize assets directory
cp -fr ./mooc-init/assets ./
# initialize components directory
cp -fr ./mooc-init/components ./
cp -fr ./mooc-init/app.html ./
echo "MOOC新项目奖初始化完成，冲冲冲！"
echo ""
echo "((((((((((@@               ##))))))))))"
echo "((((((((((@@@@@         #####))))))))))"
echo "((((((((((@@@@@@@     #######))))))))))"
echo "((((((((((@@@@@@@@@##########))))))))))"
echo "((((((((((@@@@@@@############))))))))))"
echo "(((((((((( @@@############## ))))))))))"
echo "((((((((((   #############   ))))))))))"
echo "((((((((((      #######      ))))))))))"
echo "((((((((((        ###        ))))))))))"
echo "((((((((((                   ))))))))))"
echo "((((((((((                   ))))))))))"