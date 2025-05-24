// Breadcrumbs.jsx
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs({ product }) {
  const location = useLocation();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
   
    {
      name: product?.category || 'Category',
      path: `/category/men/${(product?.category || '').toLowerCase().replace(/\s+/g, '-')}`
    },
    { name: product?.title || 'Product', path: location.pathname }
  ];

  return (
    <nav >
      {breadcrumbs.map((crumb, index) => (
        <span key={index}   >
          <Link style={{textDecoration:'none' , color:'black',paddingRight:'5px',paddingLeft:'5px'}} to={crumb.path} >
            {crumb.name}
          </Link>
          {index < breadcrumbs.length - 1 && <span className="mx-1">›</span>}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
