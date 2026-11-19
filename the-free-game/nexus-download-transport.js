/*
 * NEXUS resilient Godot Web transport.
 * Downloads the small gzip parts through byte-range requests, validates each
 * range, and persists verified ranges in IndexedDB so a page reload can resume.
 */
window.ValeDownloads = (() => {
  'use strict';

  const manifest = {"index.wasm":{"size":39514754,"sha256":"fc74679e3b97f76878947fcd4fbe1268cbfa6188182a2e33bbc3f5dc9bfa57d0","contentType":"application/wasm","parts":[{"url":"part-8d61efdefa7d47126a82.gz","size":4194304,"downloadSize":1298919,"downloadSha256":"8d61efdefa7d47126a820207caaee31265a776cc3bba631c3ef5562a5fcbd293"},{"url":"part-1da66b3f3c4c2c66ec26.gz","size":4194304,"downloadSize":1177038,"downloadSha256":"1da66b3f3c4c2c66ec26c57941b784642eed882bad8ef3a59ad3e8241bbb3e6d"},{"url":"part-324177717829ed770bfa.gz","size":4194304,"downloadSize":1084540,"downloadSha256":"324177717829ed770bfaa2cfa07242065b2d5d970ad4f127542e2d611eae6913"},{"url":"part-53a3cb8d6bd119c8d07f.gz","size":4194304,"downloadSize":852532,"downloadSha256":"53a3cb8d6bd119c8d07f1b7735536c68404af5a5d52735015eb1515fe6ee4433"},{"url":"part-7fc0eb26d03d82a0147c.gz","size":4194304,"downloadSize":786388,"downloadSha256":"7fc0eb26d03d82a0147cbb5bd761f2ee78ab88415a9db886bfdc4a0fc0e614c7"},{"url":"part-1dc4bd0437a87e304a3b.gz","size":4194304,"downloadSize":952698,"downloadSha256":"1dc4bd0437a87e304a3bce149e1e587ff591a776335a4e5e44713bce30897c0c"},{"url":"part-95a3195a18edda8ab874.gz","size":4194304,"downloadSize":772617,"downloadSha256":"95a3195a18edda8ab8748064949413f400968e9071d1c565bd3a9f7b7563b683"},{"url":"part-a1a4e6964f44aa819dc8.gz","size":4194304,"downloadSize":1043872,"downloadSha256":"a1a4e6964f44aa819dc8a4308a212d0e95f122551e40afb09d533a78dd34d2df"},{"url":"part-daf43e07c16d9eff996d.gz","size":4194304,"downloadSize":1385798,"downloadSha256":"daf43e07c16d9eff996d5fc145738d7a0aac3b561b8006c50c3ad5d18b4d03a3"},{"url":"part-0520ae50ff4fdc14ed0f.gz","size":1766018,"downloadSize":728500,"downloadSha256":"0520ae50ff4fdc14ed0f177182deac88bc6443842ba95e09296ad6850ae20ac5"}]},"the-free-game-abcad609239c00f1.pck":{"size":153780012,"sha256":"abcad609239c00f1b85bc223546c0238bc389cf0bda623e0dccfaa0856df5de1","contentType":"application/octet-stream","parts":[{"url":"part-62ae1f1d9486dea97dc6.gz","size":4194304,"downloadSize":3825602,"downloadSha256":"62ae1f1d9486dea97dc61654dffdeb535857770d5e4c89ec70400a111779be2b"},{"url":"part-3ed339e875badded4be6.gz","size":4194304,"downloadSize":3937675,"downloadSha256":"3ed339e875badded4be655470df5fdf57d62e09def3b8a909a686f5a43c772d8"},{"url":"part-e7986b0e2dd19a040288.gz","size":4194304,"downloadSize":3565746,"downloadSha256":"e7986b0e2dd19a040288a3ae851112e756169de1e19c170d65d82dced533f589"},{"url":"part-82d0dd8b17f596fda9f0.gz","size":4194304,"downloadSize":3670594,"downloadSha256":"82d0dd8b17f596fda9f055217f57369a24fce58cd06bf0f461d14c09c96384a0"},{"url":"part-809dfb3df06e41457d5f.gz","size":4194304,"downloadSize":2433220,"downloadSha256":"809dfb3df06e41457d5f2201073bfadd8d4ae9665ca8b7df6110c9509a7ef990"},{"url":"part-362afa25df20bae88f59.gz","size":4194304,"downloadSize":2327896,"downloadSha256":"362afa25df20bae88f59bd333dbf0279a9b06f32cee99fa6b96c97af689bb4f7"},{"url":"part-884212a096281c176322.gz","size":4194304,"downloadSize":2174626,"downloadSha256":"884212a096281c176322a98429327bf8fd2d2c841f711b449f8509ac807e5d60"},{"url":"part-bf29dd7f5cc44dda7ed8.gz","size":4194304,"downloadSize":2142293,"downloadSha256":"bf29dd7f5cc44dda7ed818cacf56be50c24860e7c0380c85098409e6fade7904"},{"url":"part-36a0f5bd11d296b95b27.gz","size":4194304,"downloadSize":3016920,"downloadSha256":"36a0f5bd11d296b95b27106b9d2b1c421ee0720f711adb4b1901ae9f0d201191"},{"url":"part-9dc4e396c62ed1a653c4.gz","size":4194304,"downloadSize":3118253,"downloadSha256":"9dc4e396c62ed1a653c41a8bffbc2b8efa111c134b25620550661f63b2975111"},{"url":"part-910e0b277cb7d01322e6.gz","size":4194304,"downloadSize":2397930,"downloadSha256":"910e0b277cb7d01322e6e64fdc6cdd54d6028a30a06ca9fb9d17df0308659b89"},{"url":"part-80c2c95ef53e50480b05.gz","size":4194304,"downloadSize":2221454,"downloadSha256":"80c2c95ef53e50480b053a7e513843765e9037ecedc3212cfd5dbd8d80e44724"},{"url":"part-e0d46cdbc67aad5f1b1c.gz","size":4194304,"downloadSize":2336027,"downloadSha256":"e0d46cdbc67aad5f1b1c6c703b64aab7c87987c397b064cde3ea16d36af7e7ee"},{"url":"part-dcd8196896e73d14881c.gz","size":4194304,"downloadSize":2274694,"downloadSha256":"dcd8196896e73d14881cfb4898ddd1fe5e3844a1410862e1dd6a7f6d18462870"},{"url":"part-9c42a1988801ec8e1d36.gz","size":4194304,"downloadSize":2728523,"downloadSha256":"9c42a1988801ec8e1d36f2d0ad331af91a7945f175da37f97b35553e635795e4"},{"url":"part-b0913d0b34e501613017.gz","size":4194304,"downloadSize":2553144,"downloadSha256":"b0913d0b34e501613017df15f8c60801ca7fa9d7ce8ec1e8d9a0a1943656e519"},{"url":"part-26fa9611ef56fd3985b9.gz","size":4194304,"downloadSize":2555908,"downloadSha256":"26fa9611ef56fd3985b9f5bd575edb50d962917a338931c58f04b7dca65b7481"},{"url":"part-98ca65c5dcc98c7989a2.gz","size":4194304,"downloadSize":2607662,"downloadSha256":"98ca65c5dcc98c7989a27ba0eb378bbd7bbd6304290d61f473cd662cd119bbf9"},{"url":"part-cdf034da0b70ff1d47a9.gz","size":4194304,"downloadSize":2636303,"downloadSha256":"cdf034da0b70ff1d47a939dce18a3784cd4ce0bd1efe18c5188cd6f5654ca5b3"},{"url":"part-277408a39bd236032343.gz","size":4194304,"downloadSize":2672728,"downloadSha256":"277408a39bd236032343c77fbf18fa7a030e6fc2e5f3f8af61307b8327a414fa"},{"url":"part-6f4b89d065bca8d77ad8.gz","size":4194304,"downloadSize":2618927,"downloadSha256":"6f4b89d065bca8d77ad80b5ae480c46ad6467d01f2f10f932820103499349be7"},{"url":"part-b6f8a7963a29b1b1e345.gz","size":4194304,"downloadSize":2501527,"downloadSha256":"b6f8a7963a29b1b1e34501e0692d7e31b9ff2c7d65192a5825ddd2ddc7ed39c0"},{"url":"part-7c9d9fd93cc96d11ddd0.gz","size":4194304,"downloadSize":2514555,"downloadSha256":"7c9d9fd93cc96d11ddd055e088740ee8a44773a51a82d12d2ac3655fed879591"},{"url":"part-9ffe4e2fe46341c9c7c5.gz","size":4194304,"downloadSize":2473189,"downloadSha256":"9ffe4e2fe46341c9c7c5d74390ccae65fa5f77d92ec4d08356f5fa22f55fa16c"},{"url":"part-2c59e2a80191ded7bb0c.gz","size":4194304,"downloadSize":2461982,"downloadSha256":"2c59e2a80191ded7bb0cc51056f3df4cb1df0df27eb7dac1b89d7089be7098ba"},{"url":"part-8b1daf337db0f649c5dd.gz","size":4194304,"downloadSize":2465886,"downloadSha256":"8b1daf337db0f649c5dd6f961939a893be40169ada7047b5562657e9b0104943"},{"url":"part-5507d0e542eab8afa1ae.gz","size":4194304,"downloadSize":2259207,"downloadSha256":"5507d0e542eab8afa1ae6220c6bf820bbdbf6aafe97915350dcdac1dea8eb5b7"},{"url":"part-6b9985cf30bd54907a63.gz","size":4194304,"downloadSize":2226902,"downloadSha256":"6b9985cf30bd54907a6304d8797f7823bdae0a38d3cc54dbed460d282fe50504"},{"url":"part-ab2642750095a7d1d462.gz","size":4194304,"downloadSize":2422858,"downloadSha256":"ab2642750095a7d1d462f19a4d08531dd301ba79ba106327c5790d2f92bdf537"},{"url":"part-a019db04862f97f6d35e.gz","size":4194304,"downloadSize":2282231,"downloadSha256":"a019db04862f97f6d35e3aa3d6852f5fb80085cf87dadddfbd1a1a55f2a48fa3"},{"url":"part-fe531e8d6bb8ca5e3f6f.gz","size":4194304,"downloadSize":2361635,"downloadSha256":"fe531e8d6bb8ca5e3f6f21d7485c35636438afeb569cb97f836d040390da6ac4"},{"url":"part-4ad3dfab1089d6be9f23.gz","size":4194304,"downloadSize":2261046,"downloadSha256":"4ad3dfab1089d6be9f23f1721395a5e8715e16e770a83938858667571ee90e75"},{"url":"part-7ea617c34c3c4ffc721b.gz","size":4194304,"downloadSize":2221789,"downloadSha256":"7ea617c34c3c4ffc721becf645e3aeb3c752d2fafd11a39e3773a69d3813414b"},{"url":"part-63e315687e74152a8a16.gz","size":4194304,"downloadSize":2147405,"downloadSha256":"63e315687e74152a8a1687b15070a5d3886a9858b530b7657a35e15f79842e22"},{"url":"part-1640a4d346b6a2c7c26c.gz","size":4194304,"downloadSize":2164417,"downloadSha256":"1640a4d346b6a2c7c26c05b0a8cd21bc2afb2457a0c81ca7dca42668b6877828"},{"url":"part-5cd85d206bfac2a0f05b.gz","size":4194304,"downloadSize":2330005,"downloadSha256":"5cd85d206bfac2a0f05b39af9d8613c02b44247bb745bb9971e4ed5d98877695"},{"url":"part-1b2137965f1b6bda4c75.gz","size":2785068,"downloadSize":1519903,"downloadSha256":"1b2137965f1b6bda4c75f4165b84e66299f2c3a5e80f4bce6669a9c503897d53"}]}};
  const RANGE_BYTES = 256 * 1024;
  const MAX_ATTEMPTS = 4;
  const REQUEST_TIMEOUT_MS = 25000;
  const DB_NAME = 'nexus-godot-downloads-v2';
  const DB_STORE = 'verified-ranges';
  const nativeFetch = window.fetch.bind(window);
  const memoryFallback = new Map();

  const toHex = (buffer) => Array.from(new Uint8Array(buffer), (value) =>
    value.toString(16).padStart(2, '0')
  ).join('');

  async function sha256(bytes) {
    return toHex(await window.crypto.subtle.digest('SHA-256', bytes));
  }

  function createMemoryStore() {
    return {
      async get(key) { return memoryFallback.get(key) || null; },
      async set(key, value) { memoryFallback.set(key, value); },
      async delete(key) { memoryFallback.delete(key); },
      async keys() { return Array.from(memoryFallback.keys()); },
    };
  }

  async function requestPersistentStorage() {
    const manager = navigator.storage;
    if (!manager) {
      return { supported: false, persistent: false };
    }

    try {
      const alreadyPersistent = typeof manager.persisted === 'function'
        ? await manager.persisted()
        : false;
      if (alreadyPersistent) {
        return { supported: true, persistent: true, alreadyPersistent: true };
      }

      if (typeof manager.persist !== 'function') {
        return { supported: true, persistent: false, requestAvailable: false };
      }

      const persistent = await manager.persist();
      return { supported: true, persistent: Boolean(persistent), requested: true };
    } catch (error) {
      return {
        supported: true,
        persistent: false,
        error: error?.message || 'Persistent storage request failed.',
      };
    }
  }

  function createIndexedDbStore() {
    if (!window.indexedDB) return Promise.resolve(createMemoryStore());

    return new Promise((resolve) => {
      let request;
      try {
        request = window.indexedDB.open(DB_NAME, 1);
      } catch (_) {
        resolve(createMemoryStore());
        return;
      }

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(DB_STORE)) {
          db.createObjectStore(DB_STORE);
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const run = (mode, action) => new Promise((resolveAction, rejectAction) => {
          let transaction;
          let operationResult = null;
          let operationSucceeded = false;
          let settled = false;
          const rejectOnce = (error) => {
            if (settled) return;
            settled = true;
            rejectAction(error || new Error('IndexedDB transaction failed'));
          };
          try {
            transaction = db.transaction(DB_STORE, mode);
            const store = transaction.objectStore(DB_STORE);
            const operation = action(store);
            operation.onsuccess = () => {
              operationResult = operation.result ?? null;
              operationSucceeded = true;
            };
            operation.onerror = () => rejectOnce(operation.error || new Error('IndexedDB operation failed'));
            transaction.oncomplete = () => {
              if (settled) return;
              settled = true;
              if (operationSucceeded) resolveAction(operationResult);
              else rejectAction(new Error('IndexedDB transaction completed without a result'));
            };
            transaction.onerror = () => rejectOnce(transaction.error || new Error('IndexedDB transaction failed'));
            transaction.onabort = () => rejectOnce(transaction.error || new Error('IndexedDB transaction aborted'));
          } catch (error) {
            rejectOnce(error);
          }
        });
        resolve({
          get: (key) => run('readonly', (store) => store.get(key)),
          set: (key, value) => run('readwrite', (store) => store.put(value, key)),
          delete: (key) => run('readwrite', (store) => store.delete(key)),
          keys: () => run('readonly', (store) => store.getAllKeys()),
        });
      };
      request.onerror = () => resolve(createMemoryStore());
      request.onblocked = () => resolve(createMemoryStore());
    });
  }

  async function pruneStaleRanges(store, files) {
    if (typeof store.keys !== 'function') return;
    const currentKeys = new Set();
    for (const [, file] of files) {
      for (const part of file.parts) {
        for (let start = 0; start < part.downloadSize; start += RANGE_BYTES) {
          const end = Math.min(part.downloadSize - 1, start + RANGE_BYTES - 1);
          currentKeys.add(`${part.downloadSha256}|${part.url}|${start}|${end}`);
        }
      }
    }
    try {
      const oldKeys = await store.keys();
      for (const key of oldKeys || []) {
        if (!currentKeys.has(String(key))) {
          try { await store.delete(key); } catch (_) { /* cache cleanup is best-effort */ }
          memoryFallback.delete(String(key));
        }
      }
    } catch (_) {
      // Cache cleanup must never block the playable core download.
    }
  }

  async function getCachedRange(store, key, expectedLength) {
    let entry = null;
    try {
      entry = await store.get(key);
    } catch (_) {
      // Continue with this-tab memory when IndexedDB is unavailable or blocked.
      entry = memoryFallback.get(key) || null;
    }
    if (!entry) entry = memoryFallback.get(key) || null;
    if (!entry || !entry.bytes || !entry.sha256) return null;

    const bytes = new Uint8Array(entry.bytes);
    if (bytes.byteLength !== expectedLength || await sha256(bytes) !== entry.sha256) {
      try { await store.delete(key); } catch (_) { /* cache is best-effort */ }
      memoryFallback.delete(key);
      return null;
    }
    return bytes;
  }

  async function cacheRange(store, key, bytes) {
    const owned = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    const entry = { bytes: owned, sha256: await sha256(bytes) };
    try {
      await store.set(key, entry);
    } catch (_) {
      // Storage quota/private-mode failures must not prevent this session's game from running.
      memoryFallback.set(key, entry);
    }
  }

  function sleep(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  async function fetchRange(url, start, end, expectedTotal) {
    const expectedLength = end - start + 1;
    let lastError = null;

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
      try {
        const response = await nativeFetch(url, {
          method: 'GET',
          headers: { Range: `bytes=${start}-${end}` },
          cache: 'no-store',
          credentials: 'same-origin',
          signal: controller.signal,
        });

        if (response.status !== 206) {
          throw new Error(`Range request returned HTTP ${response.status}; expected 206.`);
        }

        const contentRange = response.headers.get('content-range');
        const match = contentRange && /^bytes\s+(\d+)-(\d+)\/(\d+|\*)$/i.exec(contentRange.trim());
        if (!match || Number(match[1]) !== start || Number(match[2]) !== end ||
            (match[3] !== '*' && Number(match[3]) !== expectedTotal)) {
          throw new Error('The server returned an invalid Content-Range header.');
        }

        const bytes = new Uint8Array(await response.arrayBuffer());
        if (bytes.byteLength !== expectedLength) {
          throw new Error(`Short range response: ${bytes.byteLength}/${expectedLength} bytes.`);
        }
        return bytes;
      } catch (error) {
        lastError = error;
        if (attempt + 1 < MAX_ATTEMPTS) {
          await sleep(350 * (2 ** attempt));
        }
      } finally {
        window.clearTimeout(timer);
      }
    }

    throw new Error(`Could not download bytes ${start}-${end} from ${url}: ${lastError?.message || 'network error'}`);
  }

  async function downloadPart(part, store, onRangeReady) {
    const url = new URL(part.url, document.baseURI).href;
    const output = new Uint8Array(part.downloadSize);
    const ranges = [];

    for (let start = 0; start < part.downloadSize; start += RANGE_BYTES) {
      const end = Math.min(part.downloadSize - 1, start + RANGE_BYTES - 1);
      const key = `${part.downloadSha256}|${part.url}|${start}|${end}`;
      ranges.push({ start, end, key });
    }

    // A small bounded fan-out is faster than serial requests without flooding the host.
    const concurrency = 4;
    for (let index = 0; index < ranges.length; index += concurrency) {
      const group = ranges.slice(index, index + concurrency);
      const results = await Promise.allSettled(group.map(async (range) => {
        const expectedLength = range.end - range.start + 1;
        let bytes = await getCachedRange(store, range.key, expectedLength);
        const fromCache = Boolean(bytes);
        if (!bytes) {
          bytes = await fetchRange(url, range.start, range.end, part.downloadSize);
          await cacheRange(store, range.key, bytes);
        }
        output.set(bytes, range.start);
        onRangeReady(bytes.byteLength, range.key, fromCache);
      }));
      const failure = results.find((result) => result.status === 'rejected');
      if (failure) throw failure.reason;
    }

    if (await sha256(output) !== part.downloadSha256) {
      throw new Error(`Compressed part integrity check failed: ${part.url}`);
    }
    return output;
  }

  async function downloadFile(file, store, progress, downloadedProgress) {
    const output = new Uint8Array(file.size);
    let offset = 0;

    for (const part of file.parts) {
      const zipped = await downloadPart(part, store, (length, key, fromCache) => {
        progress.set(key, length);
        if (!fromCache) downloadedProgress.set(key, length);
        reportProgress(progress, downloadedProgress);
      });
      const decodedBuffer = await new Response(
        new Blob([zipped]).stream().pipeThrough(new DecompressionStream('gzip'))
      ).arrayBuffer();
      const decoded = new Uint8Array(decodedBuffer);
      if (decoded.byteLength !== part.size) {
        throw new Error(`Decoded part has an invalid size: ${part.url}`);
      }
      output.set(decoded, offset);
      offset += decoded.byteLength;
    }

    if (offset !== file.size || await sha256(output) !== file.sha256) {
      throw new Error('The reconstructed Godot file failed its SHA-256 integrity check.');
    }
    return output;
  }

  let activeProgressCallback = null;
  let totalDownloadBytes = 0;

  function reportProgress(progress, downloadedProgress) {
    if (!activeProgressCallback) return;
    const sumBytes = (entries) => Array.from(entries.values()).reduce((sum, size) => sum + size, 0);
    const current = sumBytes(progress);
    const downloadedBytes = sumBytes(downloadedProgress);
    const cachedBytes = Math.max(0, current - downloadedBytes);
    activeProgressCallback(current, totalDownloadBytes, {
      downloadedBytes,
      cachedBytes,
      restoredBytes: current,
    });
  }

  async function start(engine, options = {}) {
    if (typeof DecompressionStream !== 'function') {
      throw new Error('This browser does not support gzip decompression. Please update your browser.');
    }
    if (!window.crypto?.subtle) {
      throw new Error('Secure SHA-256 checks are not available in this browser. Use HTTPS.');
    }

    const storageStatus = await requestPersistentStorage();
    if (typeof options.onStorageStatus === 'function') {
      try { options.onStorageStatus(storageStatus); } catch (_) { /* UI callbacks must not interrupt loading */ }
    }

    const storage = options.rangeStore || await createIndexedDbStore();
    const progress = new Map();
    const downloadedProgress = new Map();
    const files = Object.entries(manifest);
    await pruneStaleRanges(storage, files);
    totalDownloadBytes = files.reduce((sum, [, file]) =>
      sum + file.parts.reduce((partSum, part) => partSum + part.downloadSize, 0), 0
    );
    activeProgressCallback = typeof options.onProgress === 'function' ? options.onProgress : null;

    const fileUrls = new Map(files.map(([name, file]) => [
      new URL(name, document.baseURI).href,
      file,
    ]));
    const pending = new Map();
    const originalFetch = window.fetch;

    const wrappedFetch = async (input, requestOptions) => {
      const inputUrl = input instanceof Request ? input.url : input;
      const href = new URL(inputUrl, document.baseURI).href;
      const file = fileUrls.get(href);
      if (!file) return nativeFetch(input, requestOptions);

      if (!pending.has(href)) {
        pending.set(href, downloadFile(file, storage, progress, downloadedProgress));
      }
      const bytes = await pending.get(href);
      return new Response(bytes, {
        status: 200,
        headers: {
          'Content-Type': file.contentType || file.type || 'application/octet-stream',
          'Content-Length': String(file.size),
        },
      });
    };

    window.fetch = wrappedFetch;
    reportProgress(progress, downloadedProgress);
    try {
      await engine.startGame();
    } finally {
      if (window.fetch === wrappedFetch) window.fetch = originalFetch;
      activeProgressCallback = null;
    }
  }

  return { start };
})();
