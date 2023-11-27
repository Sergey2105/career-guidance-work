import React, { useState } from "react";
import styles from "./index.module.scss";
import EventItem from "../EvenstItem";
import Link from "next/link";

const EventList = () => {
  return (
    <div className={styles["list"]}>
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
};
export default EventList;
