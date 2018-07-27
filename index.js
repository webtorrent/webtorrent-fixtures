// Torrent and content test files. Content is Public Domain or Creative Commons.

const fs = require('fs')
const path = require('path')
const parseTorrent = require('parse-torrent')

module.exports = {
  // Leaves of Grass, by Walt Whitman
  leaves: {
    contentPath: path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub'),
    torrentPath: path.join(__dirname, 'fixtures', 'leaves.torrent'),
    content: fs.readFileSync(path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub')),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent'))))
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

  // Folder which contains subfolders with multiple files
  lotsOfNumbers: {
    contentPath: path.join(__dirname, 'fixtures', 'lots-of-numbers'),
    torrentPath: path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'))))
  },

  // Big Buck Bunny, by Blender Foundation ("private" flag, "url-list" property, 434 MB)
  bunny: {
    torrentPath: path.join(__dirname, 'fixtures', 'bunny.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent'))))
  },

  // Sintel, by Blender Foundation (5.5 GB)
  sintel: {
    torrentPath: path.join(__dirname, 'fixtures', 'sintel.torrent'),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent'))))
  },

  // Leaves of Grass, by Walt Whitman (only the metadata portion received via ut_metadata)
  leavesMetadata: {
    contentPath: path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub'),
    torrentPath: path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'),
    content: fs.readFileSync(path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub')),
    torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent')),
    parsedTorrent: parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'))),
    magnetURI: parseTorrent.toMagnetURI(parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'))))
  },

  // Invalid .torrent file (missing `name` field)
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
