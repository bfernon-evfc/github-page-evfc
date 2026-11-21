const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function readTemplate(page) {
  const match = page.match(/<script type="__bundler\/template">\s*([\s\S]*?)\s*<\/script>/);
  assert.ok(match, 'Le contenu embarqué doit rester dans sa balise script.');
  return JSON.parse(match[1]);
}

test('le contenu embarqué reste lisible après une injection de rechargement automatique', () => {
  const expected = readTemplate(html);
  const reloadScript = '<script>window.__evfc_reload_test = true;</script>\n';
  const servedHtml = html.replace(/<\/body\s*>/i, reloadScript + '</body>');

  assert.notEqual(servedHtml, html, 'La page doit contenir une fin de body.');
  assert.equal(readTemplate(servedHtml), expected,
    'Le script de rechargement doit être inséré hors des données JSON.');
});
