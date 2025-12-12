import React from "react";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import { WindowControls } from "#components";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
            onClick={() => setActiveLocation(item)}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-4"
            />

            <p className="text-sm font-medium truncate">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />

        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          
          {renderList("Work ", locations.work.children)}
        </div>
      </div>
    </>
  );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;