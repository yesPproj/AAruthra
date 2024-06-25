import React from 'react';
import './Interlocking.css'; // Import CSS file for styling
// import interlockImage from './interlocking-bricks.jpg'; // Import image for interlocking bricks

const InterlockingBricksInfo = () => {
  return (
    <div className="interlocking-bricks-info">
      <h2>Modular Kitchen</h2>
      <p>
      A modular kitchen is a modern kitchen layout that incorporates pre-fabricated cabinets, drawers, and units designed for maximum efficiency and functionality. These kitchens are built from standardized modules or units, which can be easily customized and assembled to fit the specific dimensions and needs of any kitchen space. With a focus on contemporary aesthetics and practical design, modular kitchens offer a streamlined and organized cooking environment.
      </p>
      {/* <img src={interlockImage} alt="Interlocking Bricks" /> */}
      <h3>Benefits of Modular Kitchen</h3>
      <p>
        Several benefits of Modular Kitchen:
      </p>
      <ul>
        <li>Customization: Tailored to individual preferences and kitchen layouts, ensuring a perfect match for any home.</li>
        <li>Efficiency: Optimizes space with smart storage solutions, making every inch of the kitchen usable.</li>
        <li>Ease of Installation: Pre-fabricated units simplify and speed up the installation process.</li>
        <li>Maintenance: Modular units are easier to clean and maintain due to their smooth surfaces and accessible design.</li>
        <li>Aesthetic Appeal: Offers a wide range of designs, colors, and finishes to match any interior decor.</li>
        <li>Flexibility: Modules can be easily reconfigured or replaced, allowing for updates and changes without extensive remodeling.</li>
        <li>Cost-Effective: Modular kitchens often prove more economical than traditional kitchens due to standardized manufacturing processes.</li>
      </ul>
      <h3>Applications</h3>
      <p>
        Modular Kitchen usage:
      </p>
      <ul>
        <li>Residential Homes: Ideal for apartments and houses, providing efficient and stylish kitchen solutions.</li>
        <li>Small Apartments: Maximizes space in compact areas with smart storage and multifunctional units.</li>
        <li>Vacation Homes: Quick installation makes it perfect for secondary homes or rental properties.</li>
        <li>Commercial Spaces: Used in office kitchenettes and break rooms, offering functional and easy-to-maintain solutions.</li>
        <li>Hospitality Industry: Perfect for hotels and serviced apartments, offering guests modern and well-equipped kitchenettes.</li>
        <li>Custom Homes: Provides personalized design options to suit bespoke home layouts and preferences.</li>
        <li>Rental Properties: Enhances the appeal and functionality of rental units, attracting tenants with modern kitchen amenities.</li>
      </ul>
    </div>
  );
}

export default InterlockingBricksInfo;
