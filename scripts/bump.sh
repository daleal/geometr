#!/bin/sh

if [ $(git symbolic-ref --short HEAD) != main ]; then
    echo "This script is supposed to be run on the \"main\" branch."
    exit 1
fi

if [ -z $1 ]; then
    echo "A bump rule (\"patch\", \"minor\", \"major\") must be passed as a parameter."
    exit 1
fi

# Get old version
OLD_VERSION=$(pnpm run --silent version:get)

# Bump up package.json version and get new version
pnpm version $1 --no-git-tag-version && NEW_VERSION=$(pnpm run --silent version:get)

# Get the scripts directory name and the base directory name
SCRIPTS=$(cd $(dirname $0) && pwd)
BASEDIR=$(dirname $SCRIPTS)

# Commit changes into release branch
git add $BASEDIR/package.json &&
git checkout -b release/prepare-$NEW_VERSION &&
git commit --message "pre-release: prepare $NEW_VERSION release"
