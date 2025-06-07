import { useState } from "react";

const categories = [
  {
    label: 'Men',
    items: [
      { label: 'T-Shirts', gender: 'Men', slug: 't-shirts' },
      { label: 'Shirts', gender: 'Men', slug: 'shirts' },
      { label: 'Hoodies & Sweatshirts', gender: 'Men', slug: 'hoodies-sweatshirts' },
      { label: 'Jeans', gender: 'Men', slug: 'jeans' },
      { label: 'Pants', gender: 'Men', slug: 'pants' },
      { label: 'Shorts', gender: 'Men', slug: 'shorts' },
      { label: 'Jackets', gender: 'Men', slug: 'jackets' },
      
    ],
  },
  {
    label: 'Women',
    items: [
      { label: 'Tops', gender: 'Women', slug: 'tops' },
      { label: 'Blouses & Shirts', gender: 'Women', slug: "blouses-shirts" },
      { label: 'Coats, Jackets & Gilets', gender: 'Women', slug: 'coats-jackets-gilets' },
      { label: 'Hoodies & Sweaters', gender: 'Women', slug: 'hoodies-sweaters' },
      { label: 'Jeans & Jeggings', gender: 'Women', slug: 'jeans-jeggings' },
      { label: 'Pants', gender: 'Women', slug: 'pants' },
      { label: 'Skirts & Shorts', gender: 'Women', slug: 'skirts-shorts' },
      { label: 'Dresses', gender: 'Women', slug: 'dresses' },
      { label: 'Outerwear', gender: 'Women', slug: 'outerwear' },
      
      { label: 'Bags', gender: 'Women', slug: 'bags' },
    ],
  },
  {
    label: 'Accessories',
    items: [
      { label: 'Smart Watches', slug: 'smart-watches' },
      { label: 'Bags', slug: 'bags' },
      { label: 'Belts', slug: 'belts' },
      { label: 'Hats', slug: 'hats' },
      { label: 'Sunglasses', slug: 'sunglasses' },
    ],
  },
  {
    label: 'Footwear',
    items: [
      { label: 'Sneakers', slug: 'sneakers' },
      { label: 'Boots', slug: 'boots' },
      { label: 'Sandals', slug: 'sandals' },
      { label: 'Slides', slug: 'slides' },
      { label: 'Formal Shoes', slug: 'formal-shoes' },
    ],
  },
  {
    label: 'Sale',
    items: [
      { label: 'Up to 30% Off', slug: '30-off' },
      { label: 'Up to 50% Off', slug: '50-off' },
      { label: 'Clearance Items', slug: 'clearance' },
    ],
  },
  {
    label: 'New Arrivals',
    items: [
      { label: "Men's New In", gender: 'Men', slug: 'mens-new-in' },
      { label: "Women's New In", gender: 'Women', slug: 'womens-new-in' },
      { label: 'Latest Shoes', slug: 'latest-shoes' },
    ],
  },
];

const CategoryBar = ({ onCategorySelect }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="nave" aria-label="Product categories navigation">
      {categories.map((cat, idx) => (
        <div key={cat.label} className="navca">
          <div
            onClick={() => toggleDropdown(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleDropdown(idx);
              }
            }}
            tabIndex={0}
            role="button"
            aria-expanded={openIndex === idx}
            className="cat"
          >
            {cat.label}
          </div>
          {openIndex === idx && (
            <ul className="ulnav" role="list">
              {cat.items.map((item, itemIdx) => (
                <li
                  key={item.label}
                  className="linav"
                  role="listitem"
                  tabIndex={0}
                  onClick={() => {
                    if (!item.slug) {
                      console.warn('Category item slug is undefined:', item);
                      return;
                    }
                    onCategorySelect?.({
                      slug: item.slug,
                      gender: item.gender || "",
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!item.slug) {
                        console.warn('Category item slug is undefined:', item);
                        return;
                      }
                      onCategorySelect?.({
                        slug: item.slug,
                        gender: item.gender || "",
                      });
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(itemIdx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    color: hoveredIndex === itemIdx ? "#2563eb" : "#1f2937",
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default CategoryBar;
