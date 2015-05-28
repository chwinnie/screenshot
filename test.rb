require 'rubygems'
require 'bundler/setup'
Bundler.require

Phantomjs.run('./homepage_screenshot.js')