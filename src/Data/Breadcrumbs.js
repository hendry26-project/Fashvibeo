import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ product }) {
  useEffect(() => {
    console.log("Breadcrumbs received product:", product);
  }, [product]);

  if (!product) return null;

  const {
    gender = "",
    category = "",
    title = ""
  } = product;

  const capitalize = (s) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";

  const genderCap = capitalize(gender.trim());
  const categoryCap = category
    .trim()
    .split("-")                     // Split slug like "blouses-shirts"
    .map(capitalize)                // Capitalize each part
    .join(" ");                     // Join as "Blouses Shirts"

  const categorySlug = category.trim().toLowerCase();

  return (
    <nav style={{ fontSize: "14px", margin: "15px 0" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#555" }}>
        Shop
      </Link>

      {genderCap && (
        <>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#555" }}>{genderCap}</span>
        </>
      )}

      {categoryCap && (
        <>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link
            to={`/shop/${categorySlug}`}
            style={{ textDecoration: "none", color: "#555" }}
          >
            {categoryCap}
          </Link>
        </>
      )}

      {title && (
        <>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "black", fontWeight: "600" }}>{title}</span>
        </>
      )}
    </nav>
  );
}

export default Breadcrumbs;
