export const detectBrowser = () => {
  const userAgentString = navigator.userAgent;

  let edgeAgent = userAgentString.indexOf("Edge") > -1;
  let ieAgent =
    (userAgentString.indexOf("MSIE") > -1 ||
      userAgentString.indexOf("rv:") > -1) &&
    userAgentString.indexOf("Firefox") === -1;

  return edgeAgent || ieAgent;
};
