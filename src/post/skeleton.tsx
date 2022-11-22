import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <div className="post" style={{ display: "flex" }}>
    <ContentLoader speed={2} width={476} height={60} viewBox="0 0 476 60" backgroundColor="#2f3134" foregroundColor="#c33c3c">
      <rect x="166" y="0" rx="5" ry="5" width="52" height="12" />
      <rect x="64" y="24" rx="5" ry="5" width="410" height="12" />
      <circle cx="26" cy="26" r="26" />
      <rect x="64" y="0" rx="5" ry="5" width="90" height="12" />
      <rect x="64" y="44" rx="5" ry="5" width="410" height="12" />
    </ContentLoader>
  </div>
);

export default MyLoader;
