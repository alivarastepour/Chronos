import styles from "@/styles/Plans/plans.module.scss";
import Card from "../Card/Card";
import { inter } from "@/public/Fonts";
import { useEffect } from "react";
import { focusOnHover } from "./utill/focusOnHover";

const Plans: React.FC = () => {
  useEffect(() => {
    document.getElementById("card-wrapper-1")?.classList.add("deactive-left");
    document.getElementById("card-wrapper-2")?.classList.add("active-mid");
    document.getElementById("card-wrapper-3")?.classList.add("deactive-right");
    document
      .getElementById("plans-counter-1")
      ?.classList.add("counter-deactive");
    document.getElementById("plans-counter-2")?.classList.add("counter-active");
    document
      .getElementById("plans-counter-3")
      ?.classList.add("counter-deactive");
    focusOnHover();
  });
  return (
    <>
      <div className={styles["plans-wrapper"]}>
        <div className={`${styles["plans-header"]} ${inter.className}`}>
          Add <span>CHRONOS</span> To Your Workflow <span>NOW</span>
        </div>
        <div className={styles["plans-container"]}>
          <div
            id="card-wrapper-1"
            className={`${styles["card-wrapper"]} ${styles["card-wrapper-1"]}}`}
          >
            <Card>
              <Card.Header>
                <div className={styles["plan-header-contaienr"]}>
                  <div className={styles["plan-header-title"]}>free trial</div>
                  <div className={styles["plan-header-explaination"]}>
                    <div>
                      For small teams that need to manage work and scale
                      collaboration.
                    </div>
                    <div className={styles["title-button"]}>READ MORE</div>
                  </div>
                </div>
              </Card.Header>

              <Card.Explaination>
                <div className={styles["plan-detail-contaienr"]}>
                  <div className={styles["plan-detail-explaination"]}>
                    <div>Try a demo of Chronos for 30 days</div>
                    <div>Limited access to boards</div>
                    <div>only for test purposes</div>
                  </div>
                  <div className={styles["plan-more-button-wrapper"]}>
                    <div className={styles["plan-more-button"]}>
                      START TRIAL
                    </div>
                  </div>
                </div>
              </Card.Explaination>
            </Card>
          </div>
          <div
            id="card-wrapper-2"
            className={`${styles["card-wrapper"]} ${styles["card-wrapper-2"]}}`}
          >
            <Card>
              <Card.Header>
                <div className={styles["plan-header-contaienr"]}>
                  <div className={styles["plan-header-title"]}>Standard</div>
                  <div className={styles["plan-header-explaination"]}>
                    <div>
                      For individuals or teams looking to organize any project.
                    </div>
                    <div className={styles["title-button"]}>READ MORE</div>
                  </div>
                </div>
              </Card.Header>

              <Card.Explaination>
                <div className={styles["plan-detail-contaienr"]}>
                  <div className={styles["plan-detail-explaination"]}>
                    <div>
                      Organization for every project from HR to IT. Access
                      unlimited boards with Trello Standard.
                    </div>
                    <div>
                      Cross off tasks more effectively across the whole team
                      with Custom Fields and advanced checklists.
                    </div>
                    <div>
                      Run commands up to 1000 times a month: Move cards, set
                      dates, and much more, without even lifting a finger.{" "}
                    </div>
                  </div>
                  <div className={styles["plan-more-button-wrapper"]}>
                    <div className={styles["plan-more-button"]}>
                      GET STARTED
                    </div>
                  </div>
                </div>
              </Card.Explaination>
            </Card>
          </div>
          <div
            id="card-wrapper-3"
            className={`${styles["card-wrapper"]} ${styles["card-wrapper-3"]}`}
          >
            <Card>
              <Card.Header>
                <div className={styles["plan-header-contaienr"]}>
                  <div className={styles["plan-header-title"]}>Premium</div>
                  <div className={styles["plan-header-explaination"]}>
                    <div>For organizations that need to have all features</div>
                    <div className={styles["title-button"]}>READ MORE</div>
                  </div>
                </div>
              </Card.Header>

              <Card.Explaination>
                <div className={styles["plan-detail-contaienr"]}>
                  <div className={styles["plan-detail-explaination"]}>
                    <div>
                      Work out of Chronos's signature boards - or out of a
                      Timeline, Table, Calendar, and more.
                    </div>
                    <div>
                      Unlock limitless automation to add teammates to tasks,
                      move cards, set dates, and much more, without even lifting
                      a finger. No coding necessary!
                    </div>
                  </div>
                  <div className={styles["plan-more-button-wrapper"]}>
                    <div className={styles["plan-more-button"]}>
                      GET EVERYTHING
                    </div>
                  </div>
                </div>
              </Card.Explaination>
            </Card>
          </div>
        </div>
        <div className={styles["plans-counter"]}>
          <div id="plans-counter-1" className={styles["counter-active"]}></div>
          <div
            id="plans-counter-2"
            className={styles["counter-deactive"]}
          ></div>
          <div
            id="plans-counter-3"
            className={styles["counter-deactive"]}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Plans;
