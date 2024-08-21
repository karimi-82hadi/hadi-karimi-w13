import styles from "./TabComponent.module.css";

function TabComponent() {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeader}>
        <h1>Tabs Component with React</h1>
        <ul>
          <li className={styles.active}>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
          <li>Tab 4</li>
        </ul>
      </div>
      <div className={styles.tabContent}>
        <h2>Content 1</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sit
          quisquam explicabo eaque iure aliquid, culpa veniam perferendis vero
          maxime reiciendis ab? Modi laboriosam rerum quos illo amet itaque
          culpa?
        </p>
      </div>
    </div>
  );
}

export default TabComponent;
