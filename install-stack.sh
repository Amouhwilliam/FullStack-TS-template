#! /bin/bash

ROOT_PATH="$(pwd)"

APPS=(Admin-app Frontend-app)

echo "#"
echo "#"
echo "# [building] Sdk"
echo "#"
echo "#"
cd Plugins/Sdk || exit
yarn install && yarn build

for app in "${APPS[@]}"; do
    echo "#"
    echo "#"
    echo "# [building] $app"
    echo "#"
    echo "#"
    cd "${ROOT_PATH}"/"${app}" || exit
    yarn install && yarn build
done

cd $ROOT_PATH || exit
echo "done."
