/* Reconstruct Godot Web binaries from small, hash-verified gzip parts. */
(() => {
  'use strict';
  const manifest = {"index.wasm":{"size":39514754,"sha256":"fc74679e3b97f76878947fcd4fbe1268cbfa6188182a2e33bbc3f5dc9bfa57d0","contentType":"application/wasm","parts":[{"url":"part-index-wasm-0000-8d61efdefa7d.gz","size":4194304,"downloadSize":1298919,"downloadSha256":"8d61efdefa7d47126a820207caaee31265a776cc3bba631c3ef5562a5fcbd293"},{"url":"part-index-wasm-0001-1da66b3f3c4c.gz","size":4194304,"downloadSize":1177038,"downloadSha256":"1da66b3f3c4c2c66ec26c57941b784642eed882bad8ef3a59ad3e8241bbb3e6d"},{"url":"part-index-wasm-0002-324177717829.gz","size":4194304,"downloadSize":1084540,"downloadSha256":"324177717829ed770bfaa2cfa07242065b2d5d970ad4f127542e2d611eae6913"},{"url":"part-index-wasm-0003-53a3cb8d6bd1.gz","size":4194304,"downloadSize":852532,"downloadSha256":"53a3cb8d6bd119c8d07f1b7735536c68404af5a5d52735015eb1515fe6ee4433"},{"url":"part-index-wasm-0004-7fc0eb26d03d.gz","size":4194304,"downloadSize":786388,"downloadSha256":"7fc0eb26d03d82a0147cbb5bd761f2ee78ab88415a9db886bfdc4a0fc0e614c7"},{"url":"part-index-wasm-0005-1dc4bd0437a8.gz","size":4194304,"downloadSize":952698,"downloadSha256":"1dc4bd0437a87e304a3bce149e1e587ff591a776335a4e5e44713bce30897c0c"},{"url":"part-index-wasm-0006-95a3195a18ed.gz","size":4194304,"downloadSize":772617,"downloadSha256":"95a3195a18edda8ab8748064949413f400968e9071d1c565bd3a9f7b7563b683"},{"url":"part-index-wasm-0007-a1a4e6964f44.gz","size":4194304,"downloadSize":1043872,"downloadSha256":"a1a4e6964f44aa819dc8a4308a212d0e95f122551e40afb09d533a78dd34d2df"},{"url":"part-index-wasm-0008-daf43e07c16d.gz","size":4194304,"downloadSize":1385798,"downloadSha256":"daf43e07c16d9eff996d5fc145738d7a0aac3b561b8006c50c3ad5d18b4d03a3"},{"url":"part-index-wasm-0009-0520ae50ff4f.gz","size":1766018,"downloadSize":728500,"downloadSha256":"0520ae50ff4fdc14ed0f177182deac88bc6443842ba95e09296ad6850ae20ac5"}]},"index.pck":{"size":180701952,"sha256":"addace1c94102ee8c73d4648353d32be1ceff04dfd839e499613d09cb7a8c109","contentType":"application/octet-stream","parts":[{"url":"part-index-pck-0000-7e6edc454734.gz","size":4194304,"downloadSize":3825602,"downloadSha256":"7e6edc4547346eaaa28a87ccd9b5da88c9701b506cca221abdf3977dda3f2554"},{"url":"part-index-pck-0001-13f6990ac476.gz","size":4194304,"downloadSize":3455389,"downloadSha256":"13f6990ac476ffc8c0f476584df7f03b6bb4330f401d58a9b6427bde3cc7ab2a"},{"url":"part-index-pck-0002-c1bb1546c715.gz","size":4194304,"downloadSize":2893178,"downloadSha256":"c1bb1546c71545ae51b237fe3dc079365455353d9b2145ad56d82505e64a4775"},{"url":"part-index-pck-0003-627b1a08a71b.gz","size":4194304,"downloadSize":1823912,"downloadSha256":"627b1a08a71b75865ccf867bf59354edeed5714725e3424aeb0c88de08bef71d"},{"url":"part-index-pck-0004-f946a4db5a49.gz","size":4194304,"downloadSize":3315851,"downloadSha256":"f946a4db5a49a0a0f2bbe9caf5eb9bffc5456aa8f5f2c964b58381703783b8d0"},{"url":"part-index-pck-0005-f6ad3098ed7e.gz","size":4194304,"downloadSize":1799968,"downloadSha256":"f6ad3098ed7e371d803625a5bb49a8e97090a1db8593704862ea904da62cb05c"},{"url":"part-index-pck-0006-b7ae6b2a4045.gz","size":4194304,"downloadSize":3120053,"downloadSha256":"b7ae6b2a4045e8cc129d05e287f2b1cd14c3b471e852fbd58e570ee26701c348"},{"url":"part-index-pck-0007-e04644a7d2f1.gz","size":4194304,"downloadSize":2431955,"downloadSha256":"e04644a7d2f1de8bbdfe84156f02c1457fb3c4698edfef220a56c63bcfc2d0b1"},{"url":"part-index-pck-0008-133fe60d28ef.gz","size":4194304,"downloadSize":2376663,"downloadSha256":"133fe60d28ef81cd81d4b63840c61c4af24c5ee334422b1ed8ffce02ccd35225"},{"url":"part-index-pck-0009-23f684d8197b.gz","size":4194304,"downloadSize":2159642,"downloadSha256":"23f684d8197b9de48a1fef5addd0bd7773c7e442b508d94402e232be741abb82"},{"url":"part-index-pck-0010-7b05b8c7cd40.gz","size":4194304,"downloadSize":2462937,"downloadSha256":"7b05b8c7cd406e85bf7cee1eb17c1b6c79200b13e061abdc0166d537a2d17467"},{"url":"part-index-pck-0011-928f51bb6972.gz","size":4194304,"downloadSize":3409336,"downloadSha256":"928f51bb6972a18a8e0fc3baf43f2a57b9211166e55e40a0bd4973d4d8ff4027"},{"url":"part-index-pck-0012-810bfa94b4d1.gz","size":4194304,"downloadSize":3186025,"downloadSha256":"810bfa94b4d13ccff32a7130e9a1a3497aaeb9987364ef59c450040c8bd1c426"},{"url":"part-index-pck-0013-b06717a5d585.gz","size":4194304,"downloadSize":2323960,"downloadSha256":"b06717a5d585651b99c14bae2a379328081f7988baa945c8a021c0d1e8ea29ee"},{"url":"part-index-pck-0014-40e281bc2295.gz","size":4194304,"downloadSize":2272104,"downloadSha256":"40e281bc22955f325283b7bdfa37fe633ab86d0480314dee153c09c282da76ac"},{"url":"part-index-pck-0015-94957564bbcf.gz","size":4194304,"downloadSize":2153405,"downloadSha256":"94957564bbcf24e34d1f7eb1ea6638e203f524bd9b1cb3a8189683d049614d93"},{"url":"part-index-pck-0016-87a32b2372ce.gz","size":4194304,"downloadSize":2100056,"downloadSha256":"87a32b2372cec7ffd8ef9c93388756de1583935f3ebbe4e0249c232284b101f5"},{"url":"part-index-pck-0017-142d6facc649.gz","size":4194304,"downloadSize":2324349,"downloadSha256":"142d6facc6491d4225fc8c52ebf91b55dd073402e650131e59c722aff58c2bfe"},{"url":"part-index-pck-0018-2b77379ecd56.gz","size":4194304,"downloadSize":2250638,"downloadSha256":"2b77379ecd565f724abb756c525b92030bb7c458d601cef61b467bf82d606d57"},{"url":"part-index-pck-0019-583e63532e84.gz","size":4194304,"downloadSize":2235698,"downloadSha256":"583e63532e844d3ad880b43f264079e0354eee138f8dd8c77d3507270af543fa"},{"url":"part-index-pck-0020-a94f98f5e9f4.gz","size":4194304,"downloadSize":2265483,"downloadSha256":"a94f98f5e9f4c6015eed778bb55d23a31ac117ae63b48fe3a85bac30d77f41ad"},{"url":"part-index-pck-0021-0a547ca7b8c4.gz","size":4194304,"downloadSize":2555978,"downloadSha256":"0a547ca7b8c40b924dd675dcc343e7765cd309545a69a1da0ed7889ee3f06872"},{"url":"part-index-pck-0022-d7f89f612039.gz","size":4194304,"downloadSize":2591191,"downloadSha256":"d7f89f6120397dc465150b58b6f3f814b6adaa1d690bad50c6d38fbbded476c8"},{"url":"part-index-pck-0023-64f85c477385.gz","size":4194304,"downloadSize":2582609,"downloadSha256":"64f85c477385b3035535b5952eabe57e26706e1d47f934b0452e6d41ecba7841"},{"url":"part-index-pck-0024-a2af47a0f06b.gz","size":4194304,"downloadSize":2621884,"downloadSha256":"a2af47a0f06b95f7e989a7890b0b86bfa8c6dbcf3eb87e4e8a014087c597237b"},{"url":"part-index-pck-0025-66fdd0d34fb4.gz","size":4194304,"downloadSize":2706802,"downloadSha256":"66fdd0d34fb44bee1142e7fbf4b9bfd11717fa335efbe874c196fc494b15ddca"},{"url":"part-index-pck-0026-d4a27ad05f81.gz","size":4194304,"downloadSize":2614960,"downloadSha256":"d4a27ad05f8107c5c686ae06200fee4ec4b0c438062233b0816b1491ebe41af2"},{"url":"part-index-pck-0027-ec0cf0bae5c5.gz","size":4194304,"downloadSize":2476999,"downloadSha256":"ec0cf0bae5c5c78fb6fd0ff7a06ed3e8e2d5e037e7a6e2d51cc8474c6f60282f"},{"url":"part-index-pck-0028-d5395f0cff83.gz","size":4194304,"downloadSize":2527764,"downloadSha256":"d5395f0cff83d01f6d77c943489675ee87a420f7f5219d073fe9069e1f232209"},{"url":"part-index-pck-0029-86dbe252485d.gz","size":4194304,"downloadSize":2544481,"downloadSha256":"86dbe252485dae5657b0428be2a9aad1a8f9b187e72376da837e9d4854451ab8"},{"url":"part-index-pck-0030-2ceef814f529.gz","size":4194304,"downloadSize":2363874,"downloadSha256":"2ceef814f52982b19e7689b5dc4c920f81d37befde455dcbe37df0fc8209da22"},{"url":"part-index-pck-0031-b61bfb24e062.gz","size":4194304,"downloadSize":2561626,"downloadSha256":"b61bfb24e0629de803b70a64687deed6ffda77950f19cad2634eb88705468205"},{"url":"part-index-pck-0032-9ab9f2e566a3.gz","size":4194304,"downloadSize":2383842,"downloadSha256":"9ab9f2e566a3cbe4336d53cbe3f8028a2bf71ca5c87eadf7baf860a0e893b083"},{"url":"part-index-pck-0033-c4a35fb0fdce.gz","size":4194304,"downloadSize":2180968,"downloadSha256":"c4a35fb0fdce7f9e9c62879b2197c1f1b40a51f58060b5d16f884cbc9196b1fc"},{"url":"part-index-pck-0034-95c84a0d3679.gz","size":4194304,"downloadSize":2376325,"downloadSha256":"95c84a0d3679bf05db35ee6ddd1ddeac07e9618b95a0492a8ef713a34d72ea49"},{"url":"part-index-pck-0035-a94c8a379db2.gz","size":4194304,"downloadSize":2294447,"downloadSha256":"a94c8a379db25742bbebfd368b8e3a81189507f9f05ba1c109982efea2a414f9"},{"url":"part-index-pck-0036-35be1d12a9b0.gz","size":4194304,"downloadSize":2333891,"downloadSha256":"35be1d12a9b07ace6e1618a3d9ff8f72b63aefe5a2d09454e6e06be776077e88"},{"url":"part-index-pck-0037-52193cd5f788.gz","size":4194304,"downloadSize":2382464,"downloadSha256":"52193cd5f7886ed2c28bb84015c856a07d793d2b8c8836348747fc264498ed48"},{"url":"part-index-pck-0038-b32b84540813.gz","size":4194304,"downloadSize":2158998,"downloadSha256":"b32b8454081368ca85e3644e6f3304d50d898805ccf3de2d8fa3ff1f13ee7eb8"},{"url":"part-index-pck-0039-8607a2516d51.gz","size":4194304,"downloadSize":2224629,"downloadSha256":"8607a2516d51e30c64a2108473bd5ada3d4fa336772d985c7b51c032f992ec9f"},{"url":"part-index-pck-0040-fb2ee1e2d60f.gz","size":4194304,"downloadSize":2411239,"downloadSha256":"fb2ee1e2d60fe55374bf5ee7cadf6f23fb0a6784d9f701042850840b62667edd"},{"url":"part-index-pck-0041-a2c003b22513.gz","size":4194304,"downloadSize":2090896,"downloadSha256":"a2c003b22513555ac601e2ff18600b2deca0694241480f1af95def4b3aba0e46"},{"url":"part-index-pck-0042-8ef9e6f5454c.gz","size":4194304,"downloadSize":2213893,"downloadSha256":"8ef9e6f5454c770da43dae07b1f20b103cf5ddecfccbe5d6df3f1b6254c3a56e"},{"url":"part-index-pck-0043-61b9f6e8781c.gz","size":346880,"downloadSize":152170,"downloadSha256":"61b9f6e8781c6e678d87349a8fbd30be694ce9686661951ddde86376c90a0b53"}]}};
  const nativeFetch = window.fetch.bind(window);
  const files = new Map(Object.entries(manifest).map(([name, file]) => [
    new URL(name, document.baseURI).href, file
  ]));
  const pending = new Map();
  const hex = bytes => Array.from(new Uint8Array(bytes), n => n.toString(16).padStart(2, '0')).join('');

  async function sha256(bytes) {
    return hex(await crypto.subtle.digest('SHA-256', bytes));
  }

  async function verify(bytes, expected, label) {
    const actual = await sha256(bytes);
    if (actual !== expected) {
      throw new Error(`Integrity check failed for ${label}. Please reload the game.`);
    }
  }

  const RANGE_CHUNK_SIZE = 256 * 1024;
  const MAX_RANGE_ATTEMPTS = 6;

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function fetchRange(url, start, end, totalSize, partUrl) {
    let lastError = null;

    for (let attempt = 1; attempt <= MAX_RANGE_ATTEMPTS; attempt++) {
      try {
        const response = await nativeFetch(url, {
          cache: 'no-store',
          headers: {
            Range: `bytes=${start}-${end}`
          }
        });

        if (response.status !== 206) {
          throw new Error(`Expected HTTP 206, received ${response.status}`);
        }

        const contentRange = response.headers.get('Content-Range') || '';
        const match = /^bytes (\d+)-(\d+)\/(\d+)$/i.exec(contentRange);
        if (
          !match ||
          Number(match[1]) !== start ||
          Number(match[2]) !== end ||
          Number(match[3]) !== totalSize
        ) {
          throw new Error(`Unexpected Content-Range: ${contentRange || '(missing)'}`);
        }

        const bytes = new Uint8Array(await response.arrayBuffer());
        const expectedLength = end - start + 1;
        if (bytes.byteLength !== expectedLength) {
          throw new Error(
            `Range length mismatch: expected ${expectedLength}, received ${bytes.byteLength}`
          );
        }

        return bytes;
      } catch (error) {
        lastError = error;
        if (attempt < MAX_RANGE_ATTEMPTS) {
          const waitMs = Math.min(750 * (2 ** (attempt - 1)), 8000);
          console.warn(
            `[NEXUS] Range retry ${attempt}/${MAX_RANGE_ATTEMPTS - 1} for ${partUrl} bytes ${start}-${end}; retrying in ${waitMs} ms.`,
            error
          );
          await delay(waitMs);
        }
      }
    }

    throw new Error(
      `Failed to download ${partUrl} bytes ${start}-${end} after ${MAX_RANGE_ATTEMPTS} attempts: ${lastError?.message || 'unknown error'}`
    );
  }

  async function fetchPart(part) {
    const url = new URL(part.url, document.baseURI);
    const zipped = new Uint8Array(part.downloadSize);

    for (let start = 0; start < part.downloadSize; start += RANGE_CHUNK_SIZE) {
      const end = Math.min(start + RANGE_CHUNK_SIZE - 1, part.downloadSize - 1);
      const chunk = await fetchRange(url, start, end, part.downloadSize, part.url);
      zipped.set(chunk, start);
    }

    await verify(zipped, part.downloadSha256, part.url);
    if (typeof DecompressionStream !== 'function') {
      throw new Error('This browser does not support gzip streaming. Please use a recent version of Chrome, Edge, Firefox, or Safari.');
    }
    const stream = new Blob([zipped]).stream().pipeThrough(new DecompressionStream('gzip'));
    const raw = new Uint8Array(await new Response(stream).arrayBuffer());
    if (raw.byteLength !== part.size) {
      throw new Error(`Invalid decompressed size: ${part.url}`);
    }
    return raw;
  }

  async function downloadFile(file, name) {
    const output = new Uint8Array(file.size);
    let offset = 0;
    for (const part of file.parts) {
      const raw = await fetchPart(part);
      output.set(raw, offset);
      offset += raw.byteLength;
    }
    if (offset !== file.size) {
      throw new Error(`Invalid total size for ${name}.`);
    }
    await verify(output, file.sha256, name);
    return output;
  }

  async function wrappedFetch(input, options) {
    const requestUrl = input instanceof Request ? input.url : input;
    const href = new URL(requestUrl, document.baseURI).href;
    const file = files.get(href);
    const method = (options && options.method) || (input instanceof Request ? input.method : 'GET');
    if (!file || method.toUpperCase() !== 'GET') {
      return nativeFetch(input, options);
    }
    if (!pending.has(href)) {
      pending.set(href, downloadFile(file, new URL(href).pathname.split('/').pop()));
    }
    const bytes = await pending.get(href);
    return new Response(bytes, {
      status: 200,
      headers: {
        'Content-Type': file.contentType,
        'Content-Length': String(file.size),
        'Cache-Control': 'no-store'
      }
    });
  }

  window.ValeDownloads = {
    async start(engine, options) {
      window.fetch = wrappedFetch;
      try {
        return await engine.startGame(options);
      } finally {
        if (window.fetch === wrappedFetch) {
          window.fetch = nativeFetch;
        }
        pending.clear();
      }
    }
  };
})();
