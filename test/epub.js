const Epub = require('../epub');

describe('Epub', () => {
  it('should always emit end event', (done) => {
    const epub = new Epub(`${__dirname}/files/sgfmime.epub`);
    epub.on('error', () => {});
    epub.on('end', () => done());
    epub.parse();
  });
});
