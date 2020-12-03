import React from "react";
import PropTypes from "prop-types";

const styles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 12,
  paddingLeft: 12,
};
const Layout = ({ children }) => <div style={styles}>{children}</div>;

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
