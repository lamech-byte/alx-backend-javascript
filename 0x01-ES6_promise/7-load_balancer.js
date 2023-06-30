// Load balancer function
// Accepts two promises: chinaDownload and USDownload
export default function loadBalancer(chinaDownload, USDownload) {
  // Create a new promise using the Promise.race() method
  return Promise.race([chinaDownload, USDownload]);
}
