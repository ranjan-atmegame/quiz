<div className={styles.tab}>
  <ul className={styles.contests}>
    {tabJSX()}
    <li>
      <Link href="#" className="">
        Cricket
      </Link>
    </li>
  </ul>
  <div className={styles.search}>
    <Image
      src="/img/search.svg"
      width="20"
      height="20"
      alt="Search"
      title="Search"
    />
  </div>

  <div className={styles.tabContent}>{children}</div>
</div>;
