import Navigation from "./components/Navigation";

export default function SideNavigation({ children }) {
  return (
    <div className="w-screen h-screen flex">
      <div style={{ flexGrow: 1 }}>
        <Navigation />
      </div>
      <div style={{ flexGrow: 5 }}>{children}</div>
    </div>
  );
}
