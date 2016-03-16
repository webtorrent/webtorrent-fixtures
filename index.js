// Torrent and content test files. Content is Public Domain or Creative Commons.

var fs = require('fs')
var path = require('path')
var parseTorrent = require('parse-torrent')

module.exports = {
  // Leaves of Grass, by Walt Whitman
  leaves: {
    contentPath: path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub'),
    torrentPath: path.join(__dirname, 'fixtures', 'leaves.torrent'),
    content: fs.readFileSync(path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub')),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent')),
    parsedTorrent: require('./fixtures/leaves-parsed'),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent'))))
  },

  // Leaves from magnet metadata protocol
  leavesMagnet: {
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-magnet.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-magnet.torrent')),
    parsedTorrent: require('./fixtures/leaves-magnet-parsed')
  },

  // A torrent with duplicated announce tracker
  leavesDuplicateTracker: {
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-duplicate-tracker.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-duplicate-tracker.torrent'))
  },

  // A torrent with an empty announce list
  leavesEmptyAnnounceList: {
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-empty-announce-list.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-empty-announce-list.torrent'))
  },

  // A torrent with an empty url list
  leavesEmptyUrlList: {
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-empty-url-list.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-empty-url-list.torrent'))
  },

  // A torrent with an url list
  leavesUrlList: {
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-url-list.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-url-list.torrent'))
  },

  // A multi-file torrent
  pride: {
    torrentPath: path.join(__dirname, 'fixtures', 'pride.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'pride.torrent')),
    parsedTorrent: require('./fixtures/pride-parsed')
  },

  // A torrent with no announce-list
  bitloveIntro: {
    torrentPath: path.join(__dirname, 'fixtures', 'bitlove-intro.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'bitlove-intro.torrent')),
    parsedTorrent: require('./fixtures/bitlove-intro-parsed')
  },

  // Alice's Adventures in Wonderland, by Lewis Carroll
  alice: {
    contentPath: path.join(__dirname, 'fixtures', 'alice.txt'),
    torrentPath: path.join(__dirname, 'fixtures', 'alice.torrent'),
    content: fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.txt')),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent'))))
  },

  // Folder which contains single file
  folder: {
    contentPath: path.join(__dirname, 'fixtures', 'folder'),
    torrentPath: path.join(__dirname, 'fixtures', 'folder.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent'))))
  },

  // Folder which contains multiple files
  numbers: {
    contentPath: path.join(__dirname, 'fixtures', 'numbers'),
    torrentPath: path.join(__dirname, 'fixtures', 'numbers.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent'))))
  },

  // Torrent file with "private" flag, and "url-list" property
  bunny: {
    torrentPath: path.join(__dirname, 'fixtures', 'bunny.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent')))
  },

  // Invalid .torrent file
  corrupt: {
    torrentPath: path.join(__dirname, 'fixtures', 'corrupt.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'corrupt.torrent'))
  },

  // ip-set formatted files (i.e. blocklists)
  blocklist: {
    path: path.join(__dirname, 'fixtures', 'blocklist.txt'),
    gzipPath: path.join(__dirname, 'fixtures', 'blocklist.txt.gz')
  }
}
