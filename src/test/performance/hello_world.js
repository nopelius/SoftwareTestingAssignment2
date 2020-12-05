import { performance } from 'perf_hooks';

function makeHash(source) {
    var hash = 0;
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        var char = source.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

  var t0 = performance.now();
  var result = makeHash('Peter');
  var t1 = performance.now();
  console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);