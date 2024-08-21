import { useEffect, useState } from "react";
import { data } from "../constants/TabsData";

import styles from "./TabComponent.module.css";

function TabComponent() {
  const tabsData = data;
  const [activeTabId, setActiveTabId] = useState(1);

  const clickHandler = (id) => {
    setActiveTabId(id);
    localStorage.setItem("activeTab", JSON.stringify(id));
  };

  useEffect(() => {
    setActiveTabId(+localStorage.getItem("activeTab"));
  }, []);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeader}>
        <h1>Tabs Component with React</h1>
        <ul>
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              onClick={() => {
                clickHandler(tab.id);
              }}
              className={tab.id === activeTabId ? styles.active : null}
            >
              Tab {tab.id}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.tabContent}>
        {tabsData.map(
          (tab) =>
            tab.id === activeTabId && (
              <div key={tab.id}>
                <h2>{tab.title}</h2>
                <p>{tab.desc}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TabComponent;
