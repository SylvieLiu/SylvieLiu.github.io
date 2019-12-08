const alice = new RTCPeerConnection();
const bob = new RTCPeerConnection();

alice.createOffer()
  .then(offer => alice.setLocalDescription(new RTCSessionDescription(offer)))
  .then(() => bob.setRemoteDescription(alice.localDescription))
  .then(() => bob.createAnswer())
  .then(answer => bob.setLocalDescription(new RTCSessionDescription(answer)))
  .then(() => alice.setRemoteDescription(bob.localDescription))
  