# Contributing plugins

Plugin structure:
- plugin.json
- index.js (exports default register function)
- README.md

Register example:
export default function register(ctx){
  // ctx exposes plugin loader api
}
