import React from "react";

/**
 * Component representing a card container.
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The content to be wrapped within the card container.
 * @param {string} props.bg - The background color of the card container.
 * @returns {JSX.Element}
 * @author Waseem Iqbal
 */
const Card = ({ children, bg }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
