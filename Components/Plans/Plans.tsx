import { useEffect } from "react";

import styles from "@/styles/Plans/plans.module.scss";
import { inter } from "@/public/util/Fonts";

import Card from "../Card/Card";

import { focusOnHover } from "./utill/focusOnHover";
import { plansInformation } from "./data/data";

const Plans: React.FC = () => {
  useEffect(() => {
    focusOnHover();
  }, []);
  return (
    <>
      <div className={styles["plans-wrapper"]}>
        <div className={`${styles["plans-header"]} ${inter.className}`}>
          Add <span>CHRONOS</span> To Your Workflow <span>NOW</span>
        </div>
        <div id="plans-container" className={styles["plans-container"]}>
          {plansInformation.map((planInfo) => {
            const {
              id,
              header_title,
              header_explaination,
              header_button_content,
              content_items,
              more_button_content,
              initial_wrapper_classname,
            } = planInfo;
            return (
              <div
                key={id}
                data-type="container"
                id={`card-wrapper-${id}`}
                className={`${styles["card-wrapper"]} ${
                  styles[`card-wrapper-${id}`]
                }} ${initial_wrapper_classname}`}
              >
                <Card>
                  <Card.Header>
                    <div className={styles["plan-header-contaienr"]}>
                      <div className={styles["plan-header-title"]}>
                        {header_title}
                      </div>
                      <div className={styles["plan-header-explaination"]}>
                        <div>{header_explaination}</div>
                        <div className={styles["plan-header-button"]}>
                          {header_button_content}
                        </div>
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Explaination>
                    <div className={styles["plan-detail-contaienr"]}>
                      <div className={styles["plan-detail-explaination"]}>
                        {content_items.map((content) => {
                          return <div>{content}</div>;
                        })}
                      </div>
                      <div className={styles["plan-more-button-wrapper"]}>
                        <div className={styles["plan-more-button"]}>
                          {more_button_content}
                        </div>
                      </div>
                    </div>
                  </Card.Explaination>
                </Card>
              </div>
            );
          })}
        </div>
        <div className={styles["plans-counter"]}>
          <div
            data-type="counter"
            id="plans-counter-1"
            className="deactive-left"
          ></div>
          <div
            data-type="counter"
            id="plans-counter-2"
            className="active-mid"
          ></div>
          <div
            data-type="counter"
            id="plans-counter-3"
            className="deactive-right"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Plans;
