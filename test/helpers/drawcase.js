const fs = require('fs');

module.exports = async function (caseId, handler) {
  const scene = await handler();
  const canvas = await scene.snapshot();
  fs.writeFileSync(`../img/${caseId}.png`, canvas.toBuffer());
};
