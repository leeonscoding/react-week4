import type { ReactNode } from "react";

// Compound components: the parent owns the layout,
// the consumer decides what goes inside each slot.
type SlotProps = { children: ReactNode };

export function Card({ children }: SlotProps) {
  return <section className="card">{children}</section>;
}

function Header({ children }: SlotProps) {
  return <header className="card-header">{children}</header>;
}

function Body({ children }: SlotProps) {
  return <div className="card-body">{children}</div>;
}

function Footer({ children }: SlotProps) {
  return <footer className="card-footer">{children}</footer>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
