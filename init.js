load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 070 activates: uses its 70 by not gambling');
  return {phase: 1.98118};
});

print('Mongoose OS Brain 070 online – hydrogen valve ready');
