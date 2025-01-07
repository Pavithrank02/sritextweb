import { NavLink, useLocation } from "react-router-dom";
import { IconMessageFilled } from "@tabler/icons-react";

const FloatingButton = () => {
  // Get the current location/path
  const location = useLocation();

  // Check if the current path is '/contact'
  if (location.pathname === "/contact") {
    return null; // Don't render the button on the contact page
  }

  return (
    <div className="md:hidden fixed bottom-4 right-4 z-50">
      <NavLink to="/contact">
        <button className="text-customTextColor-dark p-3 rounded-full bg-customBgColor shadow-lg hover:bg-green-100 transition-all">
          {/* Icon for the button */}
          <IconMessageFilled className="h-full w-full text-customTextColor dark:text-neutral-300" />
        </button>
      </NavLink>
    </div>
  );
};

export default FloatingButton;
