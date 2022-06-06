import React from "react";
import { FixedHead } from "../../components";
import { Header } from "../../page-components/home";
import { List } from "../../page-components/search-bus";
import styles from "../../page-components/search-bus/SearchBus.module.scss";

const SearchBus: React.FC = () => {
  return (
    <div className={styles.searchBus}>
      <FixedHead title="Pesquisar" />
      <Header />
      <List />
    </div>
  );
};

export default SearchBus;
