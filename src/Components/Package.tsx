/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCallback, useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ToastContainer } from "react-toastify";
import owl1 from "../assets/owls/owl-1.png";
import owl2 from "../assets/owls/owl-2.png";
import owl3 from "../assets/owls/owl-3.png";
import owl4 from "../assets/owls/owl-4.png";
import owl5 from "../assets/owls/owl-5.png";
import owl6 from "../assets/owls/owl-6.png";
import owl0 from "../assets/owls/owls-0.png";
import avatar1 from "../assets/web-avatars/web-avatar-1.png";
import avatar2 from "../assets/web-avatars/web-avatar-2.png";
import avatar3 from "../assets/web-avatars/web-avatar-3.png";
import avatar4 from "../assets/web-avatars/web-avatar-4.png";
import avatar5 from "../assets/web-avatars/web-avatar-5.png";
import avatar6 from "../assets/web-avatars/web-avatar-6.png";
import avatar7 from "../assets/web-avatars/web-avatar-7.png";
import avatar8 from "../assets/web-avatars/web-avatar-8.png";
import avatar9 from "../assets/web-avatars/web-avatar-9.png";
import avatar10 from "../assets/web-avatars/web-avatar-10.png";
import avata11 from "../assets/web-avatars/web-avatar-11.png";
import MobileAvatar1 from "../assets/mobile-avatars/mobile-avatar-1.png";
import MobileAvatar2 from "../assets/mobile-avatars/mobile-avatar-2.png";
import MobileAvatar3 from "../assets/mobile-avatars/mobile-avatar-3.png";
import MobileAvatar4 from "../assets/mobile-avatars/mobile-avatar-4.png";
import MobileAvatar5 from "../assets/mobile-avatars/mobile-avatar-5.png";
import MobileAvatar6 from "../assets/mobile-avatars/mobile-avatar-6.png";
import MobileAvatar7 from "../assets/mobile-avatars/mobile-avatar-7.png";
import MobileAvatar8 from "../assets/mobile-avatars/mobile-avatar-8.png";
import MobileAvatar9 from "../assets/mobile-avatars/mobile-avatar-9.png";
import MobileAvatar10 from "../assets/mobile-avatars/mobile-avatar-10.png";
import MobileAvatar11 from "../assets/mobile-avatars/mobile-avatar-11.png";
import WebHoot0 from "../assets/web-hoots/web-hoot-1.png";
import WebHoot01 from "../assets/web-hoots/web-hoot-2.png";
import WebHoot02 from "../assets/web-hoots/web-hoot-3.png";
import WebHoot03 from "../assets/web-hoots/web-hoot-4.png";
import WebHoot04 from "../assets/web-hoots/web-hoot-5.png";
import WebHoot05 from "../assets/web-hoots/web-hoot-6.png";
import MobileHoot0 from "../assets/mobile-hoots/mobile-hoot-1.png";
import MobileHoot01 from "../assets/mobile-hoots/mobile-hoot-2.png";
import MobileHoot02 from "../assets/mobile-hoots/mobile-hoot-3.png";
import MobileHoot03 from "../assets/mobile-hoots/mobile-hoot-4.png";
import MobileHoot04 from "../assets/mobile-hoots/mobile-hoot-5.png";
import MobileHoot05 from "../assets/mobile-hoots/mobile-hoot-6.png";
import owlP0 from "../assets/owls/owl-premium0.png";
import owlP1 from "../assets/owls/owl-premium1.png";
import owlP2 from "../assets/owls/owl-premium2.png";
import owlP3 from "../assets/owls/owl-premium3.png";
import hoot0 from "../assets/hoots/hoot-0.png";
import hoot1 from "../assets/hoots/hoot-1.png";
import hoot2 from "../assets/hoots/hoot-2.png";
import hoot3 from "../assets/hoots/hoot-3.png";
import hoot4 from "../assets/hoots/hoot-4.png";
import hoot5 from "../assets/hoots/hoot-5.png";
import bg0 from "../assets/backgrounds/bg-0.png";
import bg1 from "../assets/backgrounds/bg-1.png";
import bg2 from "../assets/backgrounds/bg-2.png";
import bg3 from "../assets/backgrounds/bg-3.png";
import bg4 from "../assets/backgrounds/bg-4.png";
import profile0 from "../assets/profile/profile-1.png";
import profile1 from "../assets/profile/profile-2.png";
import profile2 from "../assets/profile/profile-3.png";
import profile3 from "../assets/profile/profile-4.png";
import profile4 from "../assets/profile/profile-5.png";
import { useNavigate } from "react-router-dom";
import { User, UserType } from "../Context/User";
import { useLocation } from "react-router-dom";
import { ref, update } from "firebase/database";
import { analytics, db } from "../FirebaseConfig";
import { logEvent } from "firebase/analytics";

export default function Package() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImageIndexP, setSelectedImageIndexP] = useState(1000);
  const images = [owl0, owl1, owl3, owl4, owl5, owl2, owl6];
  const AvatarsWeb = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avata11,
  ];
  const AvatarsMobile = [
    MobileAvatar1,
    MobileAvatar2,
    MobileAvatar3,
    MobileAvatar4,
    MobileAvatar5,
    MobileAvatar6,
    MobileAvatar7,
    MobileAvatar8,
    MobileAvatar9,
    MobileAvatar10,
    MobileAvatar11,
  ];
  const HootsWeb = [
    WebHoot0,
    WebHoot01,
    WebHoot04,
    WebHoot02,
    WebHoot05,
    WebHoot03,
  ];
  const HootsMobile = [
    MobileHoot05,
    MobileHoot0,
    MobileHoot03,
    MobileHoot01,
    MobileHoot04,
    MobileHoot02,
  ];
  const Profile = [profile0, profile1, profile2, profile4, profile3];
  const imagesP = [owlP1, owlP0, owlP3, owlP2];
  const hoots = [hoot0];
  const hootsP = [hoot5, hoot1, hoot2, hoot3, hoot4];
  const bgs = [bg0, bg1];
  const bgsP = [bg2, bg3, bg4];
  const [currentSelected, setCurrentSelected] = useState<
    "AVATAR" | "HOOTS" | "PROFILE"
  >("AVATAR");
  const { docId } = useContext(User) as UserType;

  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(
    location.state ? (location.state as number) : 0
  );

  // get userId

  let navigate = useNavigate();
  useEffect(() => {
    if (!docId) {
      navigate("/login");
    }
  }, [docId]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  const handleImageClick = (
    index: number,
    str: "AVATAR" | "HOOTS" | "PROFILE"
  ) => {
    setSelectedImageIndex(index);
    setSelectedImageIndexP(100);
    setCurrentSelected(str);
    const refr = ref(db, `${`selection/${docId}/`}`);
    switch (str) {
      case "AVATAR":
        update(refr, { avatar: index });
        break;
      case "HOOTS":
        update(refr, { hoot: index });
        break;
      case "PROFILE":
        update(refr, { profile: index });
        break;

      default:
        break;
    }
  };
  const handleImageClickP = (
    index: number,
    str: "AVATAR" | "HOOTS" | "PROFILE"
  ) => {
    setSelectedImageIndexP(index);
    setSelectedImageIndex(100);
    setCurrentSelected(str);
    const refr = ref(db, `${`selection/${docId}/`}`);
    switch (str) {
      case "AVATAR":
        update(refr, { avatar: index + "PREMIUM" });
        break;
      case "HOOTS":
        update(refr, { hoot: index + "PREMIUM" });
        break;
      case "PROFILE":
        update(refr, { profile: index + "PREMIUM" });
        break;

      default:
        break;
    }
  };
  const TabsPanel = useCallback(() => {
    return (
      <>
        <TabPanel className={"tab avatar-tab"}>
          <div className="tab-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndex === index ? "selected" : ""}
                onClick={() => handleImageClick(index, "AVATAR")}
              />
            ))}
            <p className="package-title">ضمن باقة البومة المميزة</p>
            {imagesP.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndexP === index ? "selected" : ""}
                onClick={() => handleImageClickP(index, "AVATAR")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel className={"hoot-tab tab"}>
          <div className="tab-container">
            {hoots.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndex === index ? "selected" : ""}
                onClick={() => handleImageClick(index, "HOOTS")}
              />
            ))}
            <p className="package-title">ضمن باقة البومة المميزة</p>
            {hootsP.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndexP === index ? "selected" : ""}
                onClick={() => handleImageClickP(index, "HOOTS")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel className={"bg-tab tab"}>
          <div className="tab-container">
            {bgs.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndex === index ? "selected" : ""}
                onClick={() => handleImageClick(index, "PROFILE")}
              />
            ))}
            <p className="package-title">ضمن باقة البومة المميزة</p>
            {bgsP.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={selectedImageIndexP === index ? "selected" : ""}
                onClick={() => handleImageClickP(index, "PROFILE")}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel className={"bg-tab tab"}>
          <div className="tab-container">
            <p className="sub-title">
              باقة البومة المميزة بتوفرلك مميزات مش عند أي حد بيستخدم أولز وكمان
              بتخليك تستمتع بكل حاجة متاحة في الآبب دلوقتي وبعدين.. كل دا
              بإشتراك شهري بسيط.{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              الافاتارز Premium
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              الهووتس Premium
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              البروفايل موود Premium{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              تخزين عدد من الهووتس يومياً تقدر توصلّه في اي وقت.{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              تقدر توصل للهووتس من النوتيفيكشن بعد ميعاد النوم.{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              بادج البومة المميزة جنب اسمك.{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              تقدر كمان تشاركنا البث التجريبي|Beta Testing وتبني أولز.{" "}
            </p>
            <p className="package-title">
              <img
                style={{ width: 25, height: 25, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
              هتستمتع بكل الإضافات الجديدة اللي جاية.{" "}
            </p>
          </div>
        </TabPanel>
        <TabPanel className={"subscribe-tab tab"}>
          <div className="tab-container-subscribe">
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginBottom: "4%",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="container-subscribe-image">
                <img alt="" src={require("../assets/vodafone.png")} />
                <p className="package-title">+20 103 344 7281</p>
              </div>
              <div className="container-subscribe-image">
                <img alt="" src={require("../assets/instapay.png")} />
                <p className="package-title">philemono@instapay</p>
              </div>
              <div
                className="container-subscribe-image"
                style={{ borderLeft: "none" }}
              >
                <img alt="" src={require("../assets/orange.png")} />
                <p className="package-title">+20 120 652 0687</p>
              </div>
            </div>
            <div>
              <p className="package-title">
                1. إبعت 25 جنيه مصري بس لواحد من الاختيارات اللي فوق دي.
              </p>
              <p className="package-title">
                2. خد Screenshot للتحويل وابعته واتساب على الرقم دا 0120652067.
              </p>
              <p className="package-title">
                3. هيتم تفعيل اشتراكك في خلال 24 ساعة وهنبعتلك التأكيد.
              </p>
              <p className="package-title">
                4. تقدر تتواصل معانا على الواتساب أي وقت سواء اشتركت او لأ.
              </p>
            </div>
            <button
              className="package-button"
              style={{ marginTop: 20 }}
              onClick={(index) => navigate("/love")}
            >
              إللي بعدُه
            </button>
          </div>
        </TabPanel>
      </>
    );
  }, [tabIndex, selectedImageIndex, selectedImageIndexP]);

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setCurrentSelected("AVATAR");
        logEvent(analytics, "AVATAR");
        break;
      case 1:
        setCurrentSelected("HOOTS");
        logEvent(analytics, "HOOTS");

        break;
      case 2:
        setCurrentSelected("PROFILE");
        logEvent(analytics, "PROFILE");
        break;
      case 3:
        logEvent(analytics, "PREMIUM");
        break;
      case 4:
        logEvent(analytics, "SUBSCRIBE");
        break;
      default:
        break;
    }
    setTabIndex(tabIndex);
    setSelectedImageIndex(0);
    setSelectedImageIndexP(100);
  }, [tabIndex]);
  return (
    <div className="screen">
      <ToastContainer />
      <div className="app-container">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList>
            <Tab>أفاتارز</Tab>
            <Tab>الهووت</Tab>
            <Tab>البروفايل</Tab>
            <Tab>
              البومة المميزة
              <img
                style={{ width: 16, height: 16, marginLeft: 5 }}
                src={require("../assets/gift-5.png")}
                alt="gift"
              />
            </Tab>
            {tabIndex === 4 && <Tab>الإشتراك</Tab>}
          </TabList>
          <div
            className={`container-of-package ${
              isMobile && tabIndex === 3 && "flex-dd"
            }`}
          >
            <div
              className="package-content"
              style={{ borderLeft: tabIndex > 3 ? "none" : "" }}
            >
              {TabsPanel()}
            </div>
            {tabIndex <= 3 && (
              <div className="flex-package-image">
                {tabIndex !== 3 ? (
                  <>
                    {currentSelected === "AVATAR" && (
                      <>
                        {selectedImageIndex !== 100 ? (
                          <img
                            className="mobile-mockup mobile-avatars"
                            alt=""
                            src={
                              isMobile
                                ? AvatarsMobile[selectedImageIndex]
                                : AvatarsWeb[selectedImageIndex]
                            }
                          />
                        ) : (
                          <img
                            className="mobile-mockup mobile-avatars"
                            alt=""
                            src={
                              isMobile
                                ? AvatarsMobile[selectedImageIndexP + 7]
                                : AvatarsWeb[selectedImageIndexP + 7]
                            }
                          />
                        )}
                      </>
                    )}

                    {currentSelected === "HOOTS" && (
                      <>
                        {selectedImageIndex !== 100 ? (
                          <img
                            className="mobile-mockup mobile-hoots"
                            alt=""
                            src={
                              isMobile
                                ? HootsMobile[selectedImageIndex]
                                : HootsWeb[selectedImageIndex]
                            }
                          />
                        ) : (
                          <img
                            className="mobile-mockup mobile-hoots "
                            alt=""
                            src={
                              isMobile
                                ? HootsMobile[selectedImageIndexP + 1]
                                : HootsWeb[selectedImageIndexP + 1]
                            }
                          />
                        )}
                      </>
                    )}
                    {currentSelected === "PROFILE" && (
                      <>
                        {selectedImageIndex !== 100 ? (
                          <img
                            className="mobile-mockup"
                            alt=""
                            src={Profile[selectedImageIndex]}
                          />
                        ) : (
                          <img
                            className="mobile-mockup"
                            alt=""
                            src={Profile[selectedImageIndexP + 2]}
                          />
                        )}
                      </>
                    )}
                    <button
                      className="package-button mobile-remove"
                      onClick={(index) =>
                        setTabIndex((prev) => (prev < 4 ? prev + 1 : prev))
                      }
                    >
                      إللي بعدُه
                    </button>
                  </>
                ) : (
                  <img
                    onClick={(index) =>
                      setTabIndex((prev) => (prev < 4 ? prev + 1 : prev))
                    }
                    alt=""
                    style={{
                      width: isMobile ? 163 : 283,
                      height: isMobile ? 231 : 406,
                      cursor: "pointer",
                    }}
                    src={require("../assets/subscribe.png")}
                  />
                )}
                {tabIndex === 3 && (
                  <p
                    onClick={() => {
                      navigate("/love");
                    }}
                    className="bottom-title"
                  >
                    أو كمّل من هنا
                  </p>
                )}
              </div>
            )}
          </div>
          {tabIndex < 3 && (
            <button
              className="package-button mobile-prev"
              onClick={(index) =>
                setTabIndex((prev) => (prev < 4 ? prev + 1 : prev))
              }
            >
              إللي بعدُه
            </button>
          )}
        </Tabs>
      </div>
    </div>
  );
}
